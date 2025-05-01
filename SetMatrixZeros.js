//Leetcode 73. Set Matrix Zeroes
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
let matrix = [[1,1,1],[1,0,1],[1,1,1]];

let r = matrix.length;
let c = matrix[0].length;
let fR =[], fC =[];

for(let i =0; i<r; i++) {
    for(let j =0; j< c; j++) {
        if(matrix[i][j]==0) {
            fR.push(i);
            fC.push(j);
        }
    }
}

// console.log(fC, fR);

//for rows

fR.forEach((r)=> {
    for(let i =0; i<c; i++) {
        matrix[r][i] =0;
    }
});

fC.forEach((c)=> {
    for(let i =0; i<r; i++) {
        matrix[i][c] =0;
    }
});

console.log(matrix);