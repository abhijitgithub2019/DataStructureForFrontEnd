// Leetcode 459. Repeated Substring Pattern

// Given a string s, check if it can be constructed by taking a substring of it and appending multiple
//  copies of the substring together.

// Example 1:

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.

// let s = "abab";

function repeatedSubStr(s) {
  if (s.length < 2) {
    return false;
  }

  let doubleStr = s+s;
  doubleStr = doubleStr.slice(1, doubleStr.length -1);
  let fIndex = -1;
  if(doubleStr.indexOf(s) >-1) {
    fIndex = doubleStr.indexOf(s) +1
  } 
  if(fIndex<s.length && fIndex!==-1) return true
  return false;

}

console.log(repeatedSubStr(s));
