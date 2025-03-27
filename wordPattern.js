// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Each letter in pattern maps to exactly one unique word in s.
// Each unique word in s maps to exactly one letter in pattern.
// No two letters map to the same word,
//and no two words map to the same letter.

// let pattern = "aaaa", s = "dog cat cat dog";
// let pattern = "abba", s = "dog constructor constructor dog";
let pattern = "abc", s = "dog cat dog";

// let pattern = "abba",
//   s = "dog cat cat dog";

// We will use two hash tables to solve the problem.
let p = pattern.split("");
let str = s.split(" ");
let mp = new Map();
let mS = new Map();

function wordP() {
  if (p.length !== str.length) {
    return false;
  }
  for (let i = 0; i < p.length; i++) {
    if (!mp.has(p[i])) {
      mp.set(p[i], str[i]);

      if (mS.has(str[i])) {
        return false;
      }
      mS.set(str[i], p[i]);
    } else {
      if (mp.get(p[i]) !== str[i]) {
        return false;
      }
    }
  }
  return true;
}

console.log(wordP())