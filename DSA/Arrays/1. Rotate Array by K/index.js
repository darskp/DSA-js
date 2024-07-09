//library
var rotate = function (arr, k) {
  const size = arr.length;

  if (k > arr.length) {
    k = k % arr.length;
  }
  let rotated = arr.splice(arr.length - k, arr.length);
  arr.unshift(...rotated);
  return arr;
};

console.log(rotate([1, 2, 3, 4, 5, 6,7], 3));
// o(n)+o(n)

//without library

const reverse = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
};

var rotateOptimized = function (arr, k) {
  const size = arr.length;
  if (k > arr.length) {
    k = k % arr.length;
  }
  reverse(arr, 0, size - 1);
  reverse(arr,0,k-1);
  reverse(arr,k,size-1)
  return arr;
};

console.log("rotateOptimized solution =",rotateOptimized([1, 2, 3, 4, 5, 6,7], 3));
