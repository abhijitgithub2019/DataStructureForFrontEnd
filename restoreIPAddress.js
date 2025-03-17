//LeetCode 93 :  Restore IP Addresses
let s = "25525511135";
//Output: ["255.255.11.135","255.255.111.35"]
//A valid IP address consists of exactly four 
//integers separated by single dots.
// 0,255 and  cannot have leading zeros.
// max = 4*3 = 12 integers
// minimum 4 integers

// We can use backtrack concept to solve the issue;
// Time complexity: 3^n


function restoreIPAdd() {
    let res = [];
    if(s.length > 12 && s.length <3) {
        return res;
    }

    function backtrack(i , dots, ipAddress) {
        if(dots === 4 && i === s.length ){
            return res.push(ipAddress.slice(0, ipAddress.length-1))
        }
        if(dots > 3) {
            return // we need max 3 dots
        }
        for(let j =i ; j< i+3; j++) {
            // We need to put one condition when we have only zeros
            if(parseInt(s.slice(i,j+1))< 256 && (i==j||  s[i]!=="0")) {
                backtrack(j+1, dots+1, ipAddress+s.slice(i,j+1)+".");
            }
        }
    }
    backtrack(0,0,"");
    return res;
}

console.log(restoreIPAdd());