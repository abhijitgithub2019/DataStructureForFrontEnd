class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  addNode(data) {
    let n = new Node(data);
    let node = this.head;
    if (node == null) {
      this.head = n;
      return;
    }
    while (node.next !== null) {
      node = node.next;
    }
    node.next = n;
  }
  printNode(node) {
    while (node !== null) {
      console.log(node.data + "->");
      node = node.next;
    }
  }


  oddEvenLinkedList() {
    let odd = this.head;
    let even = this.head.next;
    let evenHead = even;
    while(even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
  }
}

let l = new LinkedList();
l.addNode(1);
l.addNode(2);
l.addNode(3);
l.addNode(4);
l.addNode(5);
// l.addNode(5);
l.printNode(l.head);
console.log("OddEven LinedList");
l.oddEvenLinkedList();
l.printNode(l.head);