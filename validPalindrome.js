//A phrase is a palindrome if, after converting all 
//uppercase letters into lowercase letters and 
//removing all non-alphanumeric characters,
//it reads the same forward and backward
//Leetcode : 125. Valid Palindrome
 let s = "race a car";
//  let s = "A man, a plan, a canal: Panama"

 function validPalindrome() {
     // We will write one regex to remove all non-alphanumeric
     //characters
     let regex = /[^a-zA-Z0-9]/g // g means global match
     s = s.replace(regex, "").toLowerCase();
    let last = s.length -1;
    for(let i =0; i< Math.floor(s.length/2); i++) {
        if(s[i] !== s[last]) {
            return false;
        }
        last--;
    }
    return true;
 }
 console.log(validPalindrome());