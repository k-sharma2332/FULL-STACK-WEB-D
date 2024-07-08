// write an arrow function named array average that accepts an array of numbers and return te average of those numbers.

const arrayAvg = (arr) =>{
   let total = 0;
   for(let number of arr) {
    total += number;
   }
   return total / arr.length;
};

let arr = [1,2,3,4,5,6];
console.log(arrayAvg(arr));