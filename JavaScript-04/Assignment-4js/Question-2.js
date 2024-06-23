// write a js program to find  the no of digit in a number.
// ex- if number = 287152 , count = 6


let num = 287152;
let copy=num;

while(copy>0){
    count++
    copy = math.floor(copy/10);
}
console.log(count);