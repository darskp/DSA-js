const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let sum = 0;
let max = nums[0];

for (let i = 0; i < nums.length; i++) {
    sum=sum+nums[i];
    max=Math.max(max,sum)
    sum=Math.max(sum,0)
}

console.log(max)