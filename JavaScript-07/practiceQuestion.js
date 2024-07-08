// ques- Write an arrow function that returns the square of a numbber 'n'.

const square = (n) => n*n;
 
console.log(square(4));



// Write a function that prints "hello world" 5 times at interval of 2s each.

let id = setInterval(() =>{
    console.log("hello world");
},2000);

setTimeout(() => {
    clearInterval(id);
    console.log("clear interval ran");
},10000);