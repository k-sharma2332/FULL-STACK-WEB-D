let input = document.querySelector("#text");
let p = document.querySelector("p");

input.addEventListener("input",function(){
    console.log(input.value);
    p.innerText = input.value;
});