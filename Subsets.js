// Leetcode 78. Subsets
// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

let nums = [1, 2, 3];
let res = [];
let arr =[];
function subsets(i) { // 3
    console.log("i", i);
    if(i >=nums.length) {
        res.push([...arr]);
        console.log("i inside", i, res);
        return;
    }
    arr.push(nums[i]); // 1,2,3
    console.log("push", arr);
    subsets(i+1);

    arr.pop();
    console.log("Pop",arr, i );
    subsets(i+1);
}

subsets(0);
console.log(res);
