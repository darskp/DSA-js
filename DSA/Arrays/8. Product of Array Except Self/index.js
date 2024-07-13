let arr = [1, 2, 3, 4];

const mult = (arr) => {
  let mul = 1;
  for (let i = 0; i < arr.length; i++) {
    mul *= arr[i];
  }
  return mul;
};

const productofArray = (arr) => {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    let original = arr[i];
    arr[i] = 1;
    temp.push(mult(arr));
    arr[i] = original;
  }
  return temp;
};

console.log(productofArray(arr));

//o(n)

const optimizedProductofArr = (arr) => {
  let result = new Array(arr.length).fill(1);
  let left = new Array(arr.length).fill(1);
  let right = new Array(arr.length).fill(1);

  for (i = 1; i < arr.length; i++) {
    left[i] = left[i - 1] * arr[i - 1];
  }
  for (i = arr.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * arr[i + 1];
  }

  for (let i = 0; i < arr.length; i++) {
    result[i] = left[i] * right[i];
  }
  return result;
};

console.log(optimizedProductofArr(arr));
