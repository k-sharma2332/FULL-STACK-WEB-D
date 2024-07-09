// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled.
 
const doubleAndReturnArgs =(arr, ...args) => [
    ...args, 
    ...args.map((v) => v*2),
];
doubleAndReturnArgs([1,2,3],4,4);
doubleAndReturnArgs([2],10,4);