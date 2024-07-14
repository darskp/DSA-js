let s = "anagram";
let t = "nagaram";
function anagram() {
  if (s.length !== t.length) {
    return false;
  }
  let temp = t.split("");
  for (let i = 0; i < t.length; i++) {
    if (temp.includes(s[i])) {
      temp.splice(temp.indexOf(s[i]), 1);
    } else {
      return false;
    }
  }

  console.log(temp);

  if (temp.length == 0) {
    return true;
  }
}
console.log(anagram());
