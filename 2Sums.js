let m = new Map();
let inputA = [3, 2, 4],
  target = 6;
for (i = 0; i < inputA.length; i++) {
  let d = target - inputA[i];
  if (m.has(d)) {
    console.log(m.get(d), i);
  } else {
    m.set(inputA[i], i);
  }
}
