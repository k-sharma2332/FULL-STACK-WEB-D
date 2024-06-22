// Write a program to check if 2 number has the same last digit.
// Eg.32 and 47852 have the same last digit i.e. 2.
let n1 = 42;
let n2 = 432;
if((n1%10) == (n2%10)){
    console.log("number have the same last digit which is " ,n1%10);
}else{
    console.log("number don't have the same last digit");
}