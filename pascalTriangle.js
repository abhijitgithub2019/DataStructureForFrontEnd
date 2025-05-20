let numRows = 5;
//Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
let arr =[];
for(let i =1; i <=numRows; i++) {
        let v = 1;
        let line = [];
        for(let j=1; j<=i; j++) {
            // line += v + " ";
            line.push(v);
            v = Math.floor(v*(i-j)/j);
        }
        arr.push(line)
}

console.log(arr);