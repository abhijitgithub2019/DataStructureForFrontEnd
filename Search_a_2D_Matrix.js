// Leetcode 74. Search a 2D Matrix

// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

let  matrix = [[1,3,5,7],[10,11,16,20]], target = 13;

let rLen = matrix.length;
// let cLen = matrix[0].length;
function search(matrix) {
    for(let i =0; i< rLen; i++) {
        let arr = matrix[i];
        let low = 0;
        let high = arr.length;
        if(arr[low]<=target && target<=arr[high -1]) {
            console.log("Entered", arr)
          while(low<=high) {
              let mid = Math.floor((low+high)/2);
              if(arr[mid] === target) return true;
              if(arr[mid]< target) {
                  low = mid+1
              } else {
                  high = mid-1;
              }
          }
        }
      }
      return false;
}
console.log(search(matrix));