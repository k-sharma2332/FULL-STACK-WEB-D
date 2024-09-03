let div = document.querySelector("div");
let ul = document.querySelector("ul");
let li = document.querySelector("li");

div.addEventListener("click",function(){
    console.log("div was clicked");
});

ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("ul was clicked");
});

for(li of lis){
    li.addEventListener("click",function(){
        console.log("li was clicked");
    });
}