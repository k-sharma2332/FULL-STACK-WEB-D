let arr = [1,2,3,4,5];
let newArr = [...arr];

console.log(newArr);

let char = [..."hello"];

let odd = [1,3,5,7];
let even = [2,4,6,8,10];
let num = [...even,...odd];
console.log(num);