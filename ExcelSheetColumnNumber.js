// Leetcode 171. Excel Sheet Column Number
// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.
// Example 1:

// Input: columnTitle = "A"
// Output: 1

let columnTitle = "ZY"; //27

let res = 0;
for (let i = 0; i < columnTitle.length; i++) {
    res = res*26 + columnTitle[i].toLowerCase().charCodeAt(0) - 97 +1;
}
console.log(res);

