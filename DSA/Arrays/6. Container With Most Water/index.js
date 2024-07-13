let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];

function maxWaterContainer(arr) {
  let left = 0;
  let right = arr.length - 1;
  let maxArea = 0;
  while (left < right) {
    let curArea = Math.min(arr[left], arr[right]) * (right - left);
    maxArea = Math.max(curArea, maxArea);
    if (arr[right] > arr[left]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea
}

console.log(maxWaterContainer(arr));
