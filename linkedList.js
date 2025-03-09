
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
   constructor(head =null) {
    this.head = head
   }

   addNode(data) {
     let n = new Node(data);
     let node = this.head;
     if(node == null) {
      this.head = n;
      return;
     }
     while(node.next!==null) {
      node = node.next;
     }
     node.next = n;
   }
   addNodeAfterExistingNode(oldData, newData) {
    let n = new Node(newData);
    let node = this.head;
    while(node.data !== oldData) {
      node = node.next;
    }
    let n1 = node.next;
    node.next = n;
    n.next = n1;
   }
   addNodeAtThebeginning(data) {
    let n = new Node(data);
    n.next = this.head;
    this.head =n;
   }
   printNode(node) {
      while(node!==null) {
        console.log(node.data+ "->");
        node = node.next;
      }
   }
   deleteNodefromTheEnd() {
      let node = this.head;
      let prevNode;
      while(node.next!== null) {
           prevNode = node;
          node = node.next;
      }
      prevNode.next = null;
      
   }
   deletNodeFromtheBeginning() {
    let node = this.head;
    if(node.next!=null) {
        this.head = node.next;
    }
   }

}

let l = new LinkedList();
l.addNode(10)
l.addNode(20)
l.addNode(30)
l.printNode(l.head)
l.addNodeAfterExistingNode(20, 80);
console.log("addNodeAfterExistingNode");
l.printNode(l.head);

l.addNodeAtThebeginning(90);
console.log("addNodeAtThebeginning");
l.printNode(l.head);

l.deleteNodefromTheEnd();
console.log("deleteNodefromTheEnd");
l.printNode(l.head);


l.deletNodeFromtheBeginning();
console.log("deleteNodefromTheBeginnning");
l.printNode(l.head);