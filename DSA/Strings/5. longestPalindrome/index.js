// longestPalindrome

let str = "abcbab";

function isPalidrome(str) {
  return str === str.split("").reverse().join("");
}
let max=0;
let maxSubstr=""
for (let i = 0; i < str.length; i++) {
  let substr = "";
  for (let j = i; j < str.length; j++) {
    substr += str[j];
    if(isPalidrome(substr) && max<substr.length){
        max=substr.length;
        maxSubstr=substr
    }
  }
}
console.log(maxSubstr);
