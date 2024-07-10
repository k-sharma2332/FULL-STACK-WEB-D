// Qs2. Create a button on the page using JavaScript. Add an event listener to the button
//that changes the button’s color to green when it is clicked.

const button = document.createElement('button');
button.innerText = 'click me!!';
//document.querySelector("button");

button.addEventListener("click",function(){
    console.log("clicked");
});
button.addEventListener("click",function(){
   button.style.backgroundColor = "green";
});

document.body.appendChild(button);
