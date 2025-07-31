function numberOfBits() {
  if (n === 0) return n;
  let count = 0;
  while (n > 0) {
    let remainder = n % 2;
    if (remainder === 1) {
      count++;
    }
    n = Math.floor(n / 2);
  }
  return count;
}
