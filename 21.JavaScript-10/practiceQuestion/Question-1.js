//Qs1. Try out the following events in Event Listener on your own :
// - mouseout
// - keypress
// - Scroll
// - load


let input  =document.querySelector("input");

input.addEventListener("mouseout",function(){
    console.log("mouse out");
});

input.addEventListener("keypress",function(){
    console.log("keypress");
});

// input.addEventListener("Scroll",function(event){
//     console.log("Scroll.event");
// });

// input.addEventListener("load",function(){
//     console.log("load");
// });

