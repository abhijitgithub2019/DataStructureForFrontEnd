// Leetcode: 258. Add Digits

// Input: num = 38
// Output: 2

let input = 38;
// let s = 0;
function addDIgits() {
    let isAddToContinue = true;
    while(isAddToContinue) {
        input = input.toString().split("").
        reduce((a,b)=> Number(a)+Number(b));
        const n = input/10;
        isAddToContinue = parseInt(n)!==0;
    }
    return Number(input);
}




console.log(addDIgits());

