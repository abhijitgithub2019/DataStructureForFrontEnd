// Leetcode : 83. Remove Duplicates from Sorted List

// Input: head = [1,1,2]
// Output: [1,2]

// Leetcode 234. Palindrome Linked List

// Input: head = [1,2,2,1]
// Output: true


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
     printNode(node) {
        while(node!==null) {
          console.log(node.data+ "->");
          node = node.next;
        }
     }
     removeDuplicateList(node) {
        let node1 = node;
        while(node1) {
            while(node1.next && node1.data === node1.next.data) {
                node1.next = node1.next.next;
            }
            node1= node1.next;
           
        }
        console.log(node);
        this.head = node;
     }
  
  }
  
  let l = new LinkedList();
  l.addNode(1)
  l.addNode(1)
  l.addNode(2)
//   l.addNode(2)
//   l.addNode(2)
//   l.addNode(1)
//   l.printNode(l.head)
  l.removeDuplicateList(l.head);
  l.printNode(l.head);


