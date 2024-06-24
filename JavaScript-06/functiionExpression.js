let name = "shradha";

let sum = function(a,b){
    return a+b;
}

let hello = function() {
    console.log("hello");
}


function multipleGreet (func,count){  //higher order function
    for (let i = 1; i<=count; i++){
        func();
    }
}

let greet = function(){
    console.log("hello");
}

multipleGreet(function() {console.log("namaste")},10);

// Returns a function

function oddOrEvenFactory(request){
    if(request == "odd"){
        let odd =function(n) {
            console.log(!(n%2==0));
        }
        return odd;
    } else if(request == "even"){
        let even = function(n){
            console.log(n%2==0)
        }
        return even;
    }else {
        console.log("wrong request");
    }
}
let request = "odd";