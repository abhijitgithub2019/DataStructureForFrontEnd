// Leetcode : 151. Reverse Words in a String
// Input: s = "the sky is blue"
// Output: "blue is sky the"

// Input: s = "  hello world  "
// Output: "world hello"

let s = "a good   example";
// while(l<=h) {

// }

// s = s.trim();

// s = s.split(" ");
// let l = 0,
//   h = s.length - 1;

// while (l <= h) {
//     [s[h], s[l]] = [s[l], s[h]];
//   h--;
//   l++;
// }
// s = s.filter((w)=> w!=="");
// s.join(" ");

s = s.split(" ");
let l = 0, h = s.length-1;
while(l<=h) {
    [s[h],s[l]] = [s[l], s[h]];
    h--;
    l++;
}
s = s.filter(s=> s!=="");
s = s.join(" ");
console.log(s);