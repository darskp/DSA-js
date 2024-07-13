let arr = [5,4,3,2,1,8];


const maxProfit = (arr) => {
  let profit = 0;
  let min = arr[0];
  let max=-Infinity;
  for (let i = 1; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
    let diff = arr[i] - min;
    if(profit<diff){
        profit=diff;
        max=arr[i]
    }
  }
  if(profit==0){
    return 0
}
console.log(min,max);
  return profit;
};

console.log(maxProfit(arr));
