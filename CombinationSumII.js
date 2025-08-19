// Leetcode 40. Combination Sum II
// Given a collection of candidate numbers (candidates) and a target number (target),
// find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]

let candidates = [10, 1, 2, 7, 6, 1, 5],
  target = 8;

const res = [];
// let arr = [];

candidates = candidates.sort((a, b) => a - b);
const backtrack = (index, target, arr) => {
  if (target < 0) return;
  if (target === 0) {
    res.push([...arr]);
    return;
  }
  for (let i = index; i < candidates.length; i++) {
    if (i > index && candidates[i - 1] === candidates[i]) {
      continue;
    }
    arr.push(candidates[i]);
    backtrack(i + 1, target - candidates[i], arr);
    arr.pop();
  }
};
backtrack(0, target, []);
console.log(res);
