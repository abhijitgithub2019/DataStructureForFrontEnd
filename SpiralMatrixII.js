// 59. Spiral Matrix II
// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]
let n = 3;
let colMax = n-1;
let rowMax = n-1;
let c = 0;
let r = 0;
let count = 1,
  matrix = new Array(n).fill(0).map(()=> Array(n).fill(0));

while (c <= colMax && r <= rowMax) {
  for (let i = c; i <= colMax; i++) {
    matrix[r][i] = count;
    count++;
    //arr.push(matrix[r][i]);
  }
  r++;

  for (let j = r; j <= rowMax; j++) {
    matrix[j][colMax] = count;
    count++;
  }
  colMax--;

  if (r <= rowMax) {
    for (let k = colMax; k >= c; k--) {
      matrix[rowMax][k] = count;
      count++;
    }
    rowMax--;
  }

  if (c <= colMax) {
    for (let m = rowMax; m >= r; m--) {
      matrix[m][c] = count;
      count++;
    }
    c++;
  }
}

console.log(matrix);
