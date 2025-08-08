// Leetcode 45. Jump Game II
// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

let nums = [2,3,1,1,4];

let l = nums.length -1;
let left =0;
let right =0;
let res =0
while(right<l) {
    let maxReach =0;
    for(let i = left; i<=right; i++){
        maxReach = Math.max(maxReach, i+nums[i]);
    }
    left = right+1;
    right = maxReach;
    res++;
}
console.log(res);