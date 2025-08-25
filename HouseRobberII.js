// leetcode 213. House Robber II
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed.
//  All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one.
//  Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if
//   two adjacent houses were broken into on the same night.

// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent house

let nums = [1,2,3,1];
let n  = nums.length;

// let n = nums.length;
const getMaxAmount = (nums, index, n) => {
  if (index > n) return 0;
  if (memoObj[index] !== undefined) return memoObj[index];
  let stealHouse = nums[index] + getMaxAmount(nums, index + 2, n);
  let skipHouse = getMaxAmount(nums, index + 1, n);
  memoObj[index] = Math.max(stealHouse, skipHouse);
  return memoObj[index];
};
let memoObj = {};
let oneChoice = getMaxAmount(nums, 0, n-2);
memoObj ={};
let anotherChoice = getMaxAmount(nums, 1, n-1);

let d = Math.max(oneChoice, anotherChoice);
console.log(d);