let naame = "rajat";
console.log(naame[0]);
// arrays are  mutable
let fruits  = ["mango", "apple", "litchi"];
console.log(fruits[0]="bnanana");
console.log(fruits);
console.log(fruits[10]="orange");
console.log(fruits);
//Arrays method

// 1-push method
let cars = ["audi","maruthi","bmw","xuv"];
console.log(cars.push("toyota"));
console.log(cars);


// 2-pop method
cars.pop();
// console.log(cars.pop());
console.log(cars);

let followers = ["a", "b","c"];
let blocked = followers.shift();
console.log(blocked);
console.log(followers);
followers.indexOf("b");
console.log(followers.indexOf());
//includes-search for value
let primary = ["red","yellow"];
let pri = primary.includes("red");
console.log(pri);
let secondary=["orange","green","violet"];
let allcolor = primary.concat(secondary);
console.log(allcolor);
let prii = primary.reverse();
console.log(prii);
let sec = secondary.slice(1,2);
console.log(sec);
//splice method
let colors = ["red", "yellow" , "blue" , "orange" , "pink" , "white"];
 let col = colors.splice(4);
console.log(col);
let c =colors.splice(0,1);
console.log(c);
let co = colors.splice(0,1,"black" , "grey");
console.log(co);
console.log(colors)