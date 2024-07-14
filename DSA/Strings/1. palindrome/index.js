//palindrome
let name="dsaasd$45";
name=name.toLowerCase().replace(/[^a-z]/g, '');
console.log(name);
console.log(name==name.split('').reverse().join(''));