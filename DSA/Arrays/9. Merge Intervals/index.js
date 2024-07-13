let arr = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
arr.forEach((subarr) => {
  return subarr.sort((a, b) => a - b);
});

arr.sort((a, b) => a[0] - b[0]);
console.log(arr);

// [
//   [3, 6],
//   [4, 5],
//   [7, 9],
//   [8, 10],
// ];

let pair = arr[0];
let res = [];
for (const interval of arr) {
  if (pair[1] >= interval[0]) {
    pair[1] = Math.max(pair[1], interval[1]);
  } else {
    res.push(pair);
    pair = interval;
  }
}
res.push(pair)
console.log(res);
