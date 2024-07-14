//in-place  - no new array

let arr = ["h", "e", "l", "l", "o","p"];
let left=0;
let right=arr.length-1;
while(left<right){
    [arr[left],arr[right]]=[arr[right],arr[left]]
    left++
right--
}

console.log(arr);