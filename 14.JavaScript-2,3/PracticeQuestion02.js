// Question-
// A "good sttring" is a strinng that starts with the letter 'a' & has a length >3. Write a Program to find if a string is good or not.

let str = "apple";

if((str[0]==='a')&&(str.length>3)){
        console.log("Good String");
}else{
    console.log("Not a good string");
}

//Question- Predict the output of the following code:

let num = 12;
if((num%3===0)&&((num+1==15)|| (num-1 == 11))){
        console.log("safe");
}
else{
    console.log("unsafe");
}