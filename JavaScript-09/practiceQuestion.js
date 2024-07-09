// <p> with red text that say "hey i am red!"

let para1 = document.createElement("p");
para1.innerText = "hey I am red!";
document.querySelector("body").append(para1);

para1.classList.add("red");

// an <h3> with blue text that say i am h3

let h3 = document.createElement("h3");
h3.innerText = "hey I am h3!";
document.querySelector("body").append(h3);

h3.classList.add("blue");

// a <div> with a black bordder and pink background color with the folloing element inside of it:
// - another <h1> that says "I'm in a div"
// - a <p> that say "ME TOO!"

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");
h1.innerText = "I'm in a div";
para2.innerText = "ME TOO!";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector("body").append(div);