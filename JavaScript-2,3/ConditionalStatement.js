//Conditional Statement
console.log("before my if statement");
let age = 23;
if(age>=18){
    console.log("you can vote");
}

console.log("after my if statement");
if(age>20){
    console.log("you are in 20's");
}
let firstName = "shradha";
if(firstName=="shradha"){
    console.log(`Welcome ${firstName}`);
}

//ELSEIF
let agee = 14;
if(agee>=18){
    console.log("you can vote");
}
else if(age>18){
    console.log("you cannot vote");
}

let marks = 75;
if(marks>=80) {
    console.log("A+");
}
else if(marks>=60){
    console.log("A");

}
else if(marks>=33){
    console.log("B");
}
else if(marks<33){
        console.log("F");
}

let month="january";
if(month === "january"){
    console.log("winter is here");
}
else if(month==="April"){
    comsole.log("summeris here");
}

//Else
let agge = 18;
if (age>=18){
    console.log("you can vote");
}
else{
    console.log("you can not vote");
}

let color = "blue";

if(color === "red"){
    console.log("stop");
}
else if (color ==="yellow"){
    console.log("slow down");
}
else if(color==="green"){
    console.log("go");
}
else{
    console.log("traffic light is broken");
}
//Nested if - else....
let mark = 45;
if(mark>=33){
    console.log("pass");
    if(mark>=80){
        console.log("Grade : 0");
    }else{
        console.log("Grade : A");
    }
}else {
    connsole.log("Better luck next time!");
}