// reverseStr 2

let s = "abcdefg";
let revstr = "";
let k = 2;
for (let i = 0; i < s.length; i = i + 2 * k) {
  let part1 = s.slice(i, i + k).split("").reverse().join("");
  let part2 = s.slice(i + k, i + 2 * k);
  revstr += part1 + part2;
}
console.log(revstr);
