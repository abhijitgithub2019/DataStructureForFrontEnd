// Leetcode  349. Intersection of Two Arrays

//  Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

let nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];

let n1 = nums1.length,
  n2 = nums2.length;

let interArr = [];

const arryToObj = (n) => {
  return n.reduce((a, b) => {
    return { ...a, [b]: 1 };
  }, {});
};

const getIntersection = (n1, n2)=> {
    for (let i = 0; i < n2.length; i++) {
        if (n1[n2[i]]) {
          interArr.push(n2[i]);
          n1[n2[i]] = 0;
          continue;
        }
      }
}

if (n1 < n2) {
  getIntersection(arryToObj(nums1), nums2);
} else {
  getIntersection(arryToObj(nums2), nums1);
}

return interArr;


console.log(interArr);
