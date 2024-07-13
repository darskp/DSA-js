const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let sum = 0;
let max = nums[0];
let start=0;
let end=0;
let cur=0;

for (let i = 0; i < nums.length; i++) {
    sum=sum+nums[i];
    // max=Math.max(max,sum)
    // sum=Math.max(sum,0)

    if(max<sum){
        start=cur;
        max=sum;
        end=i;
    }

    if(sum<0){
        sum=0;
        cur=i+1
    }
}


console.log(max,nums.slice(start,end+1))