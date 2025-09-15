// Leetcode 383. Ransom Note

// Given two strings ransomNote and magazine, return true 
// if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Input: ransomNote = "a", magazine = "b"
// Output: false

let ransomNote = "aab", magazine = "baa";
function ramsomeNotefn() {
    let map = new Map();
    for(let i =0; i< magazine.length; i++) {
        map.set(magazine[i], (map.get(magazine[i]) || 0) +1);
    }
    
    let isRansomNote = false;
    
    for(let i =0 ;i< ransomNote.length; i++) {
        let v = map.get(ransomNote[i]) || 0;
        if(v>0) {
            map.set(ransomNote[i], v-1);
            isRansomNote = true;
        } else {
            return false;
        }
    }
}

ramsomeNotefn();




