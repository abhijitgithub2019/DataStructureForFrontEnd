// Leetcode 141. Linked List Cycle or 
//Detect a loop in LinkedList
// I will be using Floyd’s Cycle-Finding Algorithm
// As per the algo , we need to use two pointers
// one is first which can move two steps 
// another is slow which can move one step
// If the two pointer meets , that means there is a loop
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  addNode(node, data) {
    if (node === null) {
      node = new Node(data);
    } else {
      node.next = this.addNode(node.next, data);
    }
    return node;
  }
  printNode(node) {
    while (node !== null) {
      console.log(node.data + "->");
      node = node.next;
    }
  }
  detectLoopInLinkedList(head) {
    if(head === null)  return false;
     let firstMove = head;
     let slowMove = head;
     while(firstMove.next!==null) {
       if(firstMove.next?.next !=null) {
        firstMove = firstMove.next.next;
        slowMove = slowMove.next;
       } else {
        firstMove = firstMove.next;
       }

       if(firstMove === slowMove) {
        return true;
       }
     }
     return false;
  }
}

let n = new Node(10);
let l = new LinkedList();
n = l.addNode(n, 20);
n = l.addNode(n, 30);
n = l.addNode(n, 40);
n.next.next.next.next = n.next.next.next;
// l.printNode(n);
console.log("Detect a loop in a  LinedList");
// As it is going in infinite loop ,means there is a loop
console.log(l.detectLoopInLinkedList(n));
