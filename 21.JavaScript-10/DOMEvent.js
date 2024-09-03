// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function(){
//     alert("button was clicked");
// };
let btns = document.querySelectorAll("button");

for(btn of btns) {
    // btn.onmouseenter = function (){
    //     console.log("you enterd a button")
    // }
    // btn.onclick = sayHello;
    // btn.onclick = sayName;
   // console.dir(btn);
//    btn.addEventListener("click",sayHello);
//    btn.addEventListener("click",sayName);
   btn.addEventListener("dblclick",function(){;
   console.log("you double clicked on me");
});
}

function sayHello(){
    alert ("hello!");
}

function sayName() {
    alert("Apna College");
}
