// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array.

let num = [2,4,5,1];
let square = num.map((num) => num*num );
console.log(square);

let sum = square.reduce((acc,cur) => acc+cur,0);
let avg = sum / num.length;
console.log(avg);