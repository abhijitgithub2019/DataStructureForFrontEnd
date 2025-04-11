// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]
// Input: matrix = [[1,2,3],[4,5,6]]
// Output: [[1,4],[2,5],[3,6]]
let matrix = [[1,2,3],[4,5,6]]

let r = matrix.length;
let c = matrix[0].length;
// let res =[];
let res = new Array(c).fill(0).map(() => new Array(r).fill(0));

console.log(res);
for(let i =0; i < c; i++) {
        for(let j =0; j<r; j++ ) {
            res[i][j] = matrix[j][i];
        }
        //console.log(matrix);
}

console.log(res);