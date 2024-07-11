let arr = [10, 10, 1, 2, 3, 5,4, 4, 5, 6, 6];

//set
const set = new Set([...arr]);
console.log([...set]);

//filter
let uniqueEle = arr.filter((item, index, arr) => index == arr.indexOf(item));
console.log(uniqueEle);

//
let temp = [];
for (let i = 0; i < arr.length; i++) {
  if (!temp.includes(arr[i])) {
    temp.push(arr[i]);
  }

}
console.log(temp);
