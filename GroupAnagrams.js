//49. Group Anagrams
// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// let strs = ["eat","tea","tan","ate","nat","bat"];
let strs = ["bdddddddddd","bbbbbbbbbbc"];
let map = new Map();


function findHashKey(words) {
    let keyCreationArr = Array(26).fill("#");
    for(let i =0; i< words.length; i++) {
        let ch = words[i];
        // ch.charCodeAt(0) => gives ASCII value , but we need like  0-26 range
        // like a->0 , b-> 1
        keyCreationArr[ch.charCodeAt(0) - 'a'.charCodeAt(0)] +=1;
    }
  
    return keyCreationArr.join("");
}

for(let i =0; i < strs.length ;i++) {
    let key =  findHashKey(strs[i]);
    if(map.has(key)) {
        let v = map.get(key);
        map.set(key, [...v,strs[i]])
    } else {
        map.set(key, [strs[i]])
    }
}

console.log([...map.values()]);

