//Longest Common Prefix

let strs = ["flower", "flow", "floight"];

var longestCommonPrefix = function (strs) {
  if (strs.length == 0) {
    return "";
  }
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if(prefix==""){
        return ""
      }
    }
  }
  return prefix;
};
// console.log(longestCommonPrefix(strs));

var longestCommonPrefix1 = function (strs) {
  strs.sort();
  console.log(strs);
  let firstString = strs[0];
  let lastString = strs[strs.length - 1];
  let index = 0;
  for (index = 0; index < firstString.length; index++) {
    if (firstString.charAt(index) !== lastString.charAt(index)) {
      break;
    }
  }
  return index == 0 ? "" : firstString.substring(0, index);
};
console.log(longestCommonPrefix1(["flower", "flow","flowp", "floight","flop"]));

