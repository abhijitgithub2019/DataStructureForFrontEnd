//Leetcode : 24 - Swap Nodes in Pairs
//Input: head = [1,2,3,4]
//Output: [2,1,4,3]

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
  // Adding the node
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
  //Print the node
  printNode(node) {
    while (node !== null) {
      console.log(node.data + "->");
      node = node.next;
    }
  }
  swapNodesInPairs(firstNode) {
     if(firstNode === null || firstNode.next ===null) {
      return firstNode;
     }
     let secondNode = firstNode.next;
     firstNode.next = this.swapNodesInPairs(secondNode.next);
     secondNode.next = firstNode;
     return secondNode;
  }
}

let l = new LinkedList();
l.addNode(10);
l.addNode(20);
l.addNode(30);
l.addNode(40);
l.printNode(l.head);
console.log("Swap Nodes in  LinedList");
// After creating the linkedlist
let node = l.swapNodesInPairs(l.head);
l.printNode(node);