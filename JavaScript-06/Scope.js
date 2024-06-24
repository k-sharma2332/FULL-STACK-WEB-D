let sum = 64; //global scope

function calsum(a, b) {
    // let sum = a+b; //function scope
    console.log(sum);
}

calsum(1, 6);
console.log(sum);

// block scope

{
    let a = 25;     //block scope

}

console.log(a);

let age = 25;
if (age >= 10) {
    let str = "adult";  // block scope
    console.log(str);
}

function outerFunc() {
    let x = 5;
    let y = 6;
    function innerFunc() { ///function scope
                console.log(x);    //lexical scope
    }
    innerFunc();
} //hoisting use function before declaring