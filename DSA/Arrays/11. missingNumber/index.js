let arr = [9, 6, 4, 2, 3, 5, 7, 0, 1];

for (let i = 0; i <= arr.length; i++) {
  if (!arr.includes(i)) {
    console.log(i);
    break;
  }
}

let result = arr.reduce((acc, item, index, self) => {
  if (!self.includes(index)) {
    acc = index;
}
return acc;

});
console.log(result);
