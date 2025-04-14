// 344. Reverse String

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
let  s = ["h","e","l","l","o"], h=s.length-1, l =0;
while(l<h) {
    [s[l], s[h]] =[s[h], s[l]];
    l++;
    h--;
}

console.log(s);