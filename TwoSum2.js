
// Leetcode 167. Two Sum II - Input Array Is Sorted
// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
//  find two numbers such that they add up to a specific target number.
//  Let these two numbers be numbers[index1] and numbers[index2] 
//  where 1 <= index1 < index2 <= numbers.length.
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]

let numbers = [2,7,11,15], target = 9;

let low = 0, high = numbers.length-1;
while (low < high) {
    let s = numbers[low] + numbers[high];
    console.log(s);
    if (s === target) console.log(low+1, high +1);
    if (s > target) { // 11, 10
        high = high -1;
    } else {
        low = low+1;
    }
}

