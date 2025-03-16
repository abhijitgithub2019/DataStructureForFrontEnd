//Leetcode : 22. Generate Parentheses
let n = 3;
//Output:
// ["((()))","(()())","(())()","()(())","()()()"]

// We will use backtracking process to solve it.

// n = 3 means , we can use max 3 open parentheses and 3 closed parentheses

// Add open parentheses if open < n
// Add closed parentheses if closed < open
// return the value of open === closed === n

const res =[]; // The main result
const stack = [];
function backtrack(open, closed) {
    if(open === closed && closed === n) {
        return res.push(stack.join(" ").replaceAll(" ", ""))
    }

    if(open< n) {
        stack.push("(");
        backtrack(open+1, closed);
        stack.pop();
    }

    if(closed< open) {
        stack.push(")");
        backtrack(open, closed+1);
        stack.pop();
    }
}

backtrack(0,0);

console.log(res);