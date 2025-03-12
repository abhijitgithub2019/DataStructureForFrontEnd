// Input: nums = [1,2,3,4,5,6,7], k = 3 
// Output: [5,6,7,1,2,3,4]
//Leetcode - 159
//Rotate array

let nums = [1, 2, 3, 4, 5, 6, 7], k=3;

let n = nums.length;
k = k%n; // if k = 23 , then no need to rotate 23 times , 
//instead , we can only rotate 3 times.

const reverse =(start, end)=> {
    while(start < end) {
        //swap the data
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

reverse(0, n-1); // 7, 6, 5, 4,3, 2, 1
reverse(0, k-1);
reverse(k, n-1);

console.log(nums);