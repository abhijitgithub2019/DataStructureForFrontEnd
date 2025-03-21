//Leetcode 54. Spiral Matrix
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]];
// Output: [1,2,3,6,9,8,7,4,5];
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function spiral() {
  // To get the spiral , we need to use 4 for loops
  let rowMax = matrix.length - 1;
  let colMax = matrix[0].length - 1;
  let r = 0;
  let c = 0;
  let arr = []; // to get the result
  while (r <= rowMax && c <= colMax) {
    for (let i = c; i <= colMax; i++) {
      arr.push(matrix[r][i]);
    }
    r++;
    for(let j =r; j<=rowMax; j++) {
        arr.push(matrix[j][colMax])
    }
    colMax--;
    if(r<=rowMax) {
        for(let k = colMax; k>=c ; k--) {
            arr.push(matrix[rowMax][k])
        }
        rowMax--;
    }
    if(c<=colMax) {
        for(let l =rowMax; l>=r; l--) {
            arr.push(matrix[l][c])
        }
        c++;
    }
    
  }
  return arr;
}

console.log(spiral());
