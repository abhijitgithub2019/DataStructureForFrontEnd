// Leetcode: 485. Max Consecutive Ones

// Input: nums = [1,1,0,1,1,1]
// Output: 3

let nums = [1,1,0,1,1,1];
let maxC =0, count =0;
for(let i =0; i<nums.length; i++) {
    if(nums[i]==1) {
        count++;
    } else {
        if(maxC < count){
            maxC = count;
        }
        count =0;
    }
}
if(maxC < count) {
    maxC = count;
}

console.log(maxC);