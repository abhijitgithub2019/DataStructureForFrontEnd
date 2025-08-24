// Leetcode 198. House Robber

// You are a professional robber planning to rob houses along a street.
//  Each house has a certain amount of money stashed, the only constraint stopping you
//  from robbing each of them is that adjacent houses have security systems
//  connected and it will automatically contact the police
// if two adjacent houses were broken into on the same night.

// return the maximum amount of money you can rob tonight without alerting the police.

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
let nums = [1, 2, 1, 2];

let memoObj = {};
let n = nums.length;
const getMaxAmount = (nums, index, n) => {
  if (index >= n) return 0;
  if (memoObj[index] !== undefined) return memoObj[index];
  let stealHouse = nums[index] + getMaxAmount(nums, index + 2, n);
  let skipHouse = getMaxAmount(nums, index + 1, n);
  memoObj[index] = Math.max(stealHouse, skipHouse);
  return memoObj[index];
};
console.log(getMaxAmount(nums, 0, n));

