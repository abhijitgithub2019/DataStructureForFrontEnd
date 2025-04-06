//Leetcode:  338. Counting Bits
// Input: n = 2
// Output: [0,1,1]
let n  =2;
function convertDecimalToBinary(x) {
    let bi = 0;
        let isConvert = true;
        let rem =0, i =1;
        while(x != 0) {
            rem = x%2;
            bi = bi + rem * i;
            i = i * 10;
            x = parseInt(x/2);
        }
        console.log(bi)
}
// Another approach
let r =[];
r[0] =0;
for(let i =0; i<=n; i++) {
    if(i%2!==0) {
        r[i] = r[Math.floor(i/2)] +1;
    } else {
        r[i] = r[i/2];
    }
    // convertDecimalToBinary(i);

}

console.log(r);
