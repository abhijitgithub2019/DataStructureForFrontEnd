// Leetcode 367. Valid Perfect Square
// A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

// You must not use any built-in library function, such as sqrt.

// Input: num = 16
// Output: true
// Explanation: We return true because 4 * 4 = 16 and 4 is an integer.

let num = 16;
function isPerfectSquare(num) {
  let low = 0,
    high = num;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let midValue = mid * mid;
    if (midValue === num) return true;
    if (midValue > num) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return false;
}

isPerfectSquare(num);
