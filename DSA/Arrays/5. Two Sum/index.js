let arr = [2, 7, 11, 15];
let target = 26;

let map = new Map();

// for (let i = 0; i < arr.length; i++) {
//   if (map.has(target - arr[i])) {
//     console.log([map.get(target - arr[i]), i]);
//     return;
//   } else {
//     map.set(arr[i], i);
//   }
// }


let obj = {};
for (let i = 0; i < arr.length; i++) {
  let diffsum = target - arr[i];
  if (obj[diffsum]>=0) {
    console.log([obj[diffsum], i]);
    return
  } else {
    obj[arr[i]] = i;
  }
}
