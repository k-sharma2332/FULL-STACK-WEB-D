// Write a js program to get the last n elements of a array.[n can be any positive number.]
// for example:for array[7,9,0,-2] and n=3
// print [9,0,-2]

let arr = [7,9,0,-2];
let n = 3;
let ans = arr.slice(arr.legth-n);
console.log(ans);