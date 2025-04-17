// Leetcode : 11 Container With Most Water
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

let h = height.length - 1,
  l = 0,
  maxArea = 0,
  res = 0;
while (l < h) {
  maxArea = (h - l) * Math.min(height[h], height[l]);
  res = Math.max(maxArea, res);
  if (height[l] < height[h]) {
    l++;
  } else {
    h--;
  }
}
console.log(res);
