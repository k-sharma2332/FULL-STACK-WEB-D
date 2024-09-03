let button = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

button.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = input.value;

    let delbutton = document.createElement("button");
    delbutton.innerText = "delete";
    delbutton.classList.add("delete");

    item.appendChild(delbutton);
    ul.appendChild(item);
    input.value = "";
});

ul.addEventListener("click",function(event){
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }

});

// let delbuttons = document.querySelectorAll(".delete");
// for(delbutton of delbuttons){
//     delbutton.addEventListener("click",function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     }
// });
