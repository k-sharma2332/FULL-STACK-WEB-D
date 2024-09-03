// let btn = document.querySelector("button");

// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("buttoned clicked");
// });

let inp = document.querySelector("input");

// inp.addEventListener("keypress",function(){
//     console.log("key was pressed");
// });

inp.addEventListener("keydown", function (event) {
    // console.log("key = ", event.key);
    //  console.log("key was pressed");
    console.log("code = ", event.code);  // arrowup, Arrrowdown , ArrowRight , AroowLeft

    if (event.code == "ArrowUp") {
        console.log("character moves forward");
    }
    else if (event.code == "ArrowDown") {
        console.log("character moves backword");
    } else if (event.code == "ArrowLeft") {
        console.log("character move left");
    } else if (event.code == "ArrowRight") {
        console.log("character moves right");
    }
});
