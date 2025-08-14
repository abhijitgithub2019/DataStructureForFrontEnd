// Leetcode 47. Permutations II

// Example 1:

// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
let nums = [1,2,2];
let res = [];
let perm = [];
let m = new Map();

nums.forEach((n) => {
    if (m.has(n)) {
      m.set(n, m.get(n)+1);
    } else {
      m.set(n, 1);
    }
});
console.log(m)

const backtrack = (m, perm) => {

    if (perm.length === nums.length) {
        res.push([...perm]);
        return;
    }

    for (let [key, value] of m.entries()) {
      if(value === 0) continue;
      perm.push(key);
      m.set(key, m.get(key)-1);
      backtrack(m, perm);
      perm.pop();
      m.set(key, m.get(key)+1);
    }

}

backtrack(m, perm);

console.log(res);