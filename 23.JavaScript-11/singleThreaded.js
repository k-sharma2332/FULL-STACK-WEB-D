// let a = 25;
// console.log(a);
// let b= 10;
// console.log(b);
// console.log(a+b);

// synchronus nature but for settimeout it is asynchronus nature
 
// setTimeout(() => { 
//     console.log("apna college");
// }, 2000);

// console.log("hello.....");

// /// javascript is single threaded it work  one time not wait but for settimeout it only execute the function the browser lanuage work in it
// h1 = document.querySelector("h1");

// function changeColor(color,delay,nextColorChange){
//     setTimeout(() =>{
//         h1.style.color = color;
//        if (nextColorChange) nextColorChange();
//     },delay);
    
// }

// changeColor("red",1000, () =>{
//     changeColor("orange",1000,() => {
//         changeColor("green",1000);
//     });
// });


// use promise in callback hells
h1 = document.querySelector("h1");

function changeColor(color,delay){
   return new Promise((resolve , reject) =>{
        setTimeout(() =>{
            h1.style.color = color;
            resolve("colored changed!");
    },delay);
});
    
}

changeColor("red",1000)
.then(()=>{
    console.log("red color was completed");
    return changeColor("orange",1000);
})
.then(() =>{
    console.log("orange color was comleted");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("green color was completed");
    
});

// changeColor("red",1000, () =>{
//     changeColor("orange",1000,() => {
//         changeColor("green",1000);
//     });
// });

// callback nesting -> callback hell 


