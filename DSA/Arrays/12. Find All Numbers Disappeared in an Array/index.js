// missingNumbers;

let nums = [1, 1];

let numSet = new Set(nums);
console.log(numSet);
let missingNumbers = [];
for (let i = 1; i <= nums.length; i++) {
  if (!numSet.has(i)) {
    missingNumbers.push(i);
  }
}

console.log(missingNumbers);
