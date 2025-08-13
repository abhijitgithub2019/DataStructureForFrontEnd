// 21. Merge Two Sorted Lists

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

let left = 3,
  right = 4;

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
  sortLinkedList(l1, l2) {
    if(l1 === null) return l2;
    if(l2 === null) return l1;
    if(l1.data<=l2.data) {
      l1.next = this.sortLinkedList(l1.next, l2);
      return l1;
    } else {
      l2.next = this.sortLinkedList(l1, l2.next);
      return l2;
    }
  }
}

let l = new LinkedList();
l.addNode(1);
l.addNode(2);
l.addNode(4);

let l1 = new LinkedList();
l1.addNode(1);
l1.addNode(3);
l1.addNode(4);

l.printNode(l.head);
console.log("sortLinkedList");
let temp1 = l1.sortLinkedList(l.head, l1.head);
console.log(temp1);
l.printNode(temp1);
