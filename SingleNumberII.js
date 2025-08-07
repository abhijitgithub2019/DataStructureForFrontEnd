// Leetcode 137: Single Number II
// You must implement a solution with a linear runtime complexity(o(n)) and use only constant extra space.
// Input: nums = [2,2,3,2]
// Output: 3

let nums = [2, 2, 3, 2];

let low = 0;
let high = nums.length;
let res = 0;
for (let bit = 0; bit < 32; bit++) {
  let temp = 1 << bit;
  console.log(temp);
  let zeros = 0;
  let ones = 0;
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] & temp) === 0) {
      zeros++;
    } else {
      ones++;
    }
  }
  if (ones % 3 === 1) {
    res = res | temp;
  }
}
console.log(res);
