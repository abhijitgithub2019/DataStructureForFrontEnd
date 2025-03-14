// Permutations
//Input: "ABC"
//Output: [ 'ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA' ]

function Permutation(str) {
    if(str.length ===1){
        return [str];
    }
    let pArr =[], obj ={};
    for(let i =0; i < str.length; i++) {
        // We will keep one string stand by and shuffle 
        // the remaining
        let firstStr = str[i];
        const remainStr = str.slice(0,i) + str.slice(i+1, str.length);
        // now do the recursion call with the remain string
        let list = Permutation(remainStr);
        list.forEach((item)=> {
            // to avoid duplicate using obj
            let p = firstStr+item;
            if(obj[p]=== undefined) {
                pArr.push(p);
                obj[p]= 1;
            }
        })
    }
    return pArr;
}

console.log(Permutation("AABC"))