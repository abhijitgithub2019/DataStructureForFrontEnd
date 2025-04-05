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
     palindromeLinkedList(node) {
        let fast = node;
        let slow = node;
        while(fast && fast.next!==null) {
            fast = fast.next.next;
            slow = slow.next;
        }

        let prev=null;
        while(slow!=null) {
            let temp = slow.next;
            slow.next = prev;
            prev = slow;
            slow = temp;
        }

        slow = prev;
        fast = this.head;
        console.log(fast, slow)
        while(slow!==null) {
            if(slow.data !== fast.data) {
                return false;
            }
            slow = slow.next;
            fast = fast.next;
        }
        return true;
     }
  
  }
  
  let l = new LinkedList();
  l.addNode(1)
  l.addNode(2)
//   l.addNode(2)
//   l.addNode(1)
  l.printNode(l.head)
  console.log(l.palindromeLinkedList(l.head));

