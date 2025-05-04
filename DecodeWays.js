// Leetcode : 91. Decode Ways

// For example, "11106" can be decoded into:

// "AAJF" with the grouping (1, 1, 10, 6)
// "KJF" with the grouping (11, 10, 6)
// The grouping (1, 11, 06) is invalid because "06" is not a valid code (only "6" is valid).

// Input: s = "12"
// Output: 2

// Input: s = "226"

// Output: 3

// Explanation:

// "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).


function decodeWays(s) {
    // const dp = (i)=> {
    //     if(s.length === 0 || s[0] === 0) return 0;
    //     if(s.length ==1) return 1;
    //     let count =0;
    //     for(let i =0; i < s.length; i++) {
    //         let s = s[i];
    //         let ss = s.slice(i, i+2);
    //         // if(s > 0 && s <=9) {
    //         //     count = count+1;
    //         // }
    //     }
    // }
   
    // console.log(dp[s.length-1])
    const dp = new Array(s.length+1).fill(-1);
    let n = s.length;
    let res =0;
    const decode = (i) => {
        console.log("Test", dp)
        if (dp[i] !== -1) return dp[i];
        if (i === n) return dp[i] = 1;
        if (s[i] === "0") return dp[i] = 0;
        if(s[i] > "0") {
            res = decode(i + 1);
        }
   
      
        if (i + 1 < n) {
            if (s[i] == "1" || (s[i] === "2" && s[i + 1] <= "6")) {
                res += decode(i + 2);
            }
        }
        return dp[i] = res;

    }
    // console.log(dp)
    return decode(0);

}

console.log(decodeWays("126"))

// let s = "12";

class Decoder {
    constructor() {
        this.t = new Array(101).fill(-1);
    }

    solve(i, s, n) {
        if (this.t[i] !== -1) {
            return this.t[i];
        }

        if (i === n) {
            return this.t[i] = 1; // one valid split done
        }

        if (s[i] === '0') {
            return this.t[i] = 0; // not possible to split
        }

        let result = this.solve(i + 1, s, n);

        if (i + 1 < n) {
            if (s[i] === '1' || (s[i] === '2' && s[i + 1] <= '6')) {
                result += this.solve(i + 2, s, n);
            }
        }

        return this.t[i] = result;
    }

    numDecodings(s) {
        const n = s.length;
        this.t.fill(-1);
        return this.solve(0, s, n);
    }
}



