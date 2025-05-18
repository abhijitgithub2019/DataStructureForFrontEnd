// 204. Count Primes
// Example 1:

// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
// Example 2:

// Input: n = 0
// Output: 0
// Example 3:

// Input: n = 1
// Output: 0

function countPrimes(n) {

  let primeArr = new Array(n).fill(1);
  primeArr[1] = 0;
  let count =0;
  for(let i =2; i*i<n; i++) {
      if(!primeArr[i]) continue;
      for(let j=i*i; j<n; j+=i){
          primeArr[j]=0;
      }
  }

  for(let i =2; i<n; i++) {
      if(primeArr[i] ==1) {
          count++;
      }
  }
  return count;
}
console.log(countPrimes(10));
