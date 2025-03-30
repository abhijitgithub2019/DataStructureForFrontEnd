// 205. Isomorphic Strings
// Input: s = "egg", t = "add"
// Output: true

// let s = "egg", t = "add"
// let s = "foo", t = "bar"
// let s = "paper", t = "title"
// let s = "badc" ,t = "baba";
// let s = "ab", t = "ab";
let s = "ab", t = "ac";

function isIsomorphicStrings() {
    if(s.length !== t.length) {
        return false;
     }
    if(s === t) {
        return true;
     }
     let sHash = new Map();
     let tHash = new Map();
     for(let i =0; i< s.length; i++) {
        if(!sHash.has(s[i])) {
            sHash.set(s[i], t[i]);
            if(tHash.has(t[i])) {
               return false;
            }
            console.log(tHash);
            tHash.set(t[i], s[i]);
        } else {
            if(sHash.get(s[i])!== t[i]) {
                return false;
            }
        }

     }
     return true;
}

console.log(isIsomorphicStrings());