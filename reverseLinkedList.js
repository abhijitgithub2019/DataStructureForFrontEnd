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
  reverseLinkedList() {
    let node = this.head;
    let prevNode = null;
    let nextNode;
    while(node!=null) {
        nextNode = node.next;
        node.next = prevNode;
        prevNode = node;
        node = nextNode;
    }
    this.head = prevNode;
  }
}

let l = new LinkedList();
l.addNode(10);
l.addNode(20);
l.addNode(30);
l.addNode(40);
l.printNode(l.head);
console.log("Reverse LinedList");
l.reverseLinkedList();
l.printNode(l.head);
