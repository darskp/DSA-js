//hamming distance
let x=93;
let y=73;
let xor = x ^ y;
let count = 0;
while (xor !== 0) {
  let countres = xor & 1;
  count = count + countres;
  xor = xor >> 1;
}
console.log(count);