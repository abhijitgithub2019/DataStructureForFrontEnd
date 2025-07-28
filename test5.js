// // const nums1 = [4,9,5], nums2 = [9,4,9,8,4];
// // let arrI =[];
// // function convertArrayToObjects(arr) {
// //     return arr.reduce((a, b) => {
// //         return { ...a, [b]: 1 }
// //     }, {});
// // }

// // const getIntersection = (tempObj, tempArr)=> {
// //     console.log("ss", tempObj)
// //     for(let i =0; i<tempArr.length; i++) {
// //         if(tempObj[tempArr[i]]) {
// //             arrI.push(tempArr[i]);
// //             tempObj[tempArr[i]] = 0;
// //             continue;
// //         }
// //     }
// // }
// // getIntersection(convertArrayToObjects(nums1), nums2);
// // console.log(arrI)

// // let obj ={};
// // const fibo = (n)=> {
// //     if(obj[n]) {
// //         return obj[n];
// //     }
// //     if(n ===0 || n===1) {
// //         return 1;
// //     } else {
// //         obj[n] = fibo(n-1)+fibo(n-2)
// //         return fibo(n-1)+fibo(n-2);
// //     }

// // }
// // let res = fibo(3)
// // console.log(res);

// // function _partition(arr, low, high)
// // {
// //      let pivot = arr[high], pivotloc = low;
// //         for (let i = low; i <= high; i++)
// //         {

// //             // inserting elements of  bigger value
// //             // to the right of the pivot location
// //             if (arr[i] > pivot)
// //             {
// //                 let temp = arr[i];
// //                 arr[i] = arr[pivotloc];
// //                 arr[pivotloc] = temp;
// //                 pivotloc++;
// //             }
// //         }
// //         console.log(arr);
// //         // swapping pivot to the final pivot location
// //         let temp = arr[high];
// //         arr[high] = arr[pivotloc];
// //         arr[pivotloc] = temp;

// //         return pivotloc;
// // }

// // // finds the kth position (of the sorted array)
// //     // in a given unsorted array i.e this function
// //     // can be used to find both kth largest and
// //     // kth smallest element in the array.
// //     // ASSUMPTION: all elements in arr[] are distinct
// // function kthLargest(arr, low, high, k)
// // {

// //     // find the partition
// //         let partition = _partition(arr, low, high);

// //         // if partition value is equal to the kth position,
// //         // return value at k.
// //         if (partition == k - 1)
// //             return arr[partition];

// //         // if partition value is less than kth position,
// //         // search right side of the array.
// //         else if (partition < k - 1)
// //             return kthLargest(arr, partition + 1, high, k);

// //         // if partition value is more than kth position,
// //         // search left side of the array.
// //         else
// //             return kthLargest(arr, low, partition - 1, k);
// // }

// // console.log(kthLargest(nums, 0, nums.length-1, k));

// const swap = (nums, a, b) => {
//   let temp = nums[a];
//   nums[a] = nums[b];
//   nums[b] = temp;
// };

// // function partition(nums, low, high) {
// //     let pivot = nums[low];
// //     let i =low+1;
// //     let j = high;
// //     while(i< j) {

// //         if (nums[i] < pivot && nums[j] > pivot) {
// //             swap(nums, i, j);
// //             i++ ;
// //             j-- ;
// //         }

// //         if (nums[i] >= pivot) {
// //             i++;
// //         }
// //         if (nums[j] <= pivot) {
// //             j--;
// //         }

// //     }
// //     swap(nums, low, j);
// //     return j;

// // }

// // while(1) {
// //     let partitionIndex = partition(nums, left, right);
// //     // console.log(partitionIndex);
// //     if(partitionIndex === k-1) {
// //         res = nums[partitionIndex];
// //         break;
// //     }
// //     if(left < k-1) {
// //         left = partitionIndex +1;
// //     } else {
// //         right = partitionIndex -1;
// //     }

// // }
// // console.log(res);
// let nums = [3,2,1,5,6,4],
//   k = 2;
// let low = 0;
// let high = nums.length - 1;
// let targetIndex = nums.length - k;
// let partitionIndex;

// function partition(nums, low, high) {
//   let pivot = nums[high];
//   let i = low;

//   for (let j = low; j < high; j++) {
//     if (nums[j] < pivot) {
//       console.log("Inside", nums, high);
//       swap(nums, i, j);
//       i++;
//     }
//   }
//   swap(nums, i, high);

//   console.log(nums);
//   // if(!isChecked) {
//   // console.log("i", i)
//   // i++}
//   return i;
// }

// function getData(nums, low, high) {
//   while (low <= high) {
//     partitionIndex = partition(nums, low, high);
//     console.log("partitionIndex", partitionIndex, targetIndex);
//     // if()
//     if (partitionIndex < targetIndex) {
//       low = partitionIndex + 1;
//     } else if (partitionIndex > targetIndex) {
//       high = partitionIndex - 1;
//     } else {
//       return nums[partitionIndex];
//     }
//   }
// }

// console.log(getData(nums, low, high));

// let s = "25525511135", res =[];;

// function backtrack(i, dots, curIP) {
//     if (dots === 4 && i === s.length) {
//         res.push(curIP.slice(0, curIP.length-1));
//         return;
//     }
//     if (dots > 3) {
//         console.log("dots", curIP)
//         return;
//     }
//     for (let j = i; j < i + 3; j++) {
//         console.log(s.slice(i, j + 1));
//         if (parseInt(s.slice(i, j + 1)) < 256 && (i === j || s[i] !== "0")) {
//             backtrack(j + 1, dots + 1, curIP + s.slice(i, j + 1) + ".");
//         }
//     }
// }

// backtrack(0, 0, "");

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }



// class LinkedList {
//   constructor(head = null) {
//     this.head = head;
//   }
//   addNode(data) {
//     let n = new Node(data);
//     let node = this.head;
//     if (node === null) {
//       this.head = n;
//       return;
//     }
//     while (node.next !== null) {
//       node = node.next;
//     }
//     node.next = n;
//   }

//   printNode(node) {
//     while (node !== null) {
//       console.log(node.data);
//       node = node.next;
//     }
//   }

//   reverseNode(node) {
//     let prev = null;
//     while (node !== null) {
//       let tempNode = node.next;
//       node.next = prev;
//       prev = node;
//       node = tempNode;
//     }
//     this.head = prev;
//   }

//   swapNodeInPairs(firstNode) {
//     if (firstNode === null || firstNode.next === null) {
//       return firstNode;
//     }
//     let secondNode = firstNode.next;
//     firstNode.next = this.swapNodeInPairs(secondNode.next);
//     secondNode.next = firstNode;
//      return secondNode;
//   }
// }


// let l = new LinkedList();
// l.addNode(10);
// l.addNode(20);
// l.addNode(30);
// l.addNode(40);

// l.printNode(l.head);

// console.log("Reverse Node: ");

// l.reverseNode(l.head);
// l.printNode(l.head);
// let node = l.swapNodeInPairs(l.head);

// console.log("swap in pairs: ");
// l.printNode(node);



// class LRUNode {
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class LRUCache {
//     constructor(capacity) {
//         this.capacity = capacity;
//         this.size = 0;
//         this.head = new LRUNode(null, null);
//         this.tail = new LRUNode(null, null);
//         this.head.next = this.tail;
//         this.tail.prev = this.head;
//         this.cache = new Map();
//     }

//     addTohead(node) {
//         if(node) {
//             let tempNode = this.head.next;
//             this.head.next = node;
//             node.prev = this.head;
//             node.next = tempNode;
//             tempNode.prev = node;
//         }
//     }

//     removeNode(node) {
//         if(node) {
//             const prevNode = node.prev;
//             const nextNode = node.next;
//             nextNode.prev = prevNode;
//             prevNode.next = nextNode;
//         }
//     }

//     moveTohead(node) {
//         this.removeNode(node);
//         this.addTohead(node);
//     }

//     removeFromTail() {
//         let tailNode = this.tail.prev;
//         this.removeNode(tailNode);
//         return tailNode;
//     }
//     get() {

//     }
//     put(key, value) {
//         if(this.cache.has(key)) {
//             const node = this.cache.get(key);
//             node.value = value;
//             this.moveTohead(node);
//         } else {
//             let node = new LRUNode(key, value);
//             this.cache.set(key, node);
//             this.addTohead(node);
//             this.size++;
//             if(this.size > this.capacity) {
//                 const tailNode = this.removeFromTail();
//                 this.cache.delete(tailNode.key);
//                 this.size--;
//             }
//         }
//     }
// }


// var LRUCachef = function(capacity) {
//     this.capacity = capacity;

// }


//Next Permutation


//Top K frequents


// let nums = [1,1,1,2,2,3], k = 2
// // Output: [1,2]
// let map = new Map();
// for(let i =0; i< nums.length; i++) {
//     if(map.has(nums[i])) {
//         let v = map.get(nums[i]);
//         map.set(nums[i], v+1);
//     }
//      else {
//         map.set(nums[i], 1);
//      }
// }

// let values = Array.from(map);

// values.sort((a, b) => b[1] -a[1]);

// console.log(values);


var orangesRotting = function(grid) {
    const height = grid.length;
    const width = grid[0].length;
    let fresh = 0;
    const queue = [];
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (grid[i][j] === 2) queue.push([i, j]);
        if (grid[i][j] === 1) fresh++;
      }
    }
    let minute = 0;
    while (queue.length) {
      const size = queue.length;
      for (let i = 0; i < size; i++) {
        const [x, y] = queue.shift();
        if (x - 1 >= 0 && grid[x - 1][y] === 1) {
          grid[x - 1][y] = 2;
          fresh--;
          queue.push([x - 1, y]);
        }
        if (x + 1 < height && grid[x + 1][y] === 1) {
          grid[x + 1][y] = 2;
          fresh--;
          queue.push([x + 1, y]);
        }
        if (y - 1 >= 0 && grid[x][y - 1] === 1) {
          grid[x][y - 1] = 2;
          fresh--;
          queue.push([x, y - 1]);
        }
        if (y + 1 < width && grid[x][y + 1] === 1) {
          grid[x][y + 1] = 2;
          fresh--;
          queue.push([x, y + 1]);
        }
      }
      if (queue.length > 0) minute++;
    }
    return fresh === 0 ? minute : -1;
  };
  
