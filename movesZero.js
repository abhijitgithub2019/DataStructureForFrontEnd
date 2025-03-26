
//nums = [0]
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
//Note that you must do this in-place without 
//making a copy of the array.
// o(n) && o(1)
let nums = [0,1];

let zeroIndex =0;
for(let i =0; i< nums.length; i++) {
    if(nums[i]!==0) {
        let z = nums[zeroIndex];
        nums[zeroIndex] = nums[i];
        nums[i] = z;
        zeroIndex++;
    }
}


console.log(nums);