// Leetcode : 557. Reverse Words in a String III
// Given a string s, reverse the order of characters in each word within a sentence 
// while still preserving whitespace and initial word order.
// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"



let s = "Let's take LeetCode contest";

const reverse = (w)=> {
    w = w.split("");
    let left =0, right = w.length-1;
    console.log(w);
    while(left < right) {
        let t = w[left];
        w[left] = w[right];
        w[right] = t;
        left++;
        right--;
    }
    console.log(w);
    return w.join("");
}

s = s.split(" ");
console.log(s);
for(let i =0; i< s.length; i++) {
    let w = s[i];
    s[i] = reverse(w);
}

console.log(s.join(" "));
