// Leetcode : 90
// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
let nums = [4,4,4,1,4];
let l = nums.length;
let res = [];
let arr = [], obj = {};
const backtrack = (i) => {
    if (i >= l) {
        let str = arr.join("");
        console.log(str);
        if (obj[str] === undefined) {
            res.push([...arr]);
            obj[str] = 1;
        } 
        return;
    }

    arr.push(nums[i]);
    backtrack(i + 1);

    arr.pop();
    backtrack(i + 1);
}
backtrack(0);
console.log(res, obj);


[[4,4,4,1,4],[4,4,4,1],[4,4,1,4],[4,4,1],[4,1,4],[4,1]]

[[1,4,4],[1,4,4,4],[1,4,4,4,4]]