//Leetcode 209. Minimum Size Subarray Sum

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2

let nums = [2, 3, 1, 2, 4, 3],
  target = 7;

let s = 0,
  count = 0,
  minC = Infinity,
  leftP = 0;
for (let i = 0; i < nums.length; i++) {
  s = s + nums[i];
  while (s >= target) {
    count++;
    minC = Math.min(count, minC);
    s = s - nums[leftP];
    leftP++;
    count = count - 2;
  }
  count++;
}
if (minC === Infinity) console.log(0);

console.log(minC);
