// let smallImages = document.getElementsByClassName("oldImg");

// for(let i=0;i<smallImages.length;i++){
//     smallImages[i].src = "spiderman.jpeg";
//     console.log(`values of images no. ${i} is changed.`);
// }

// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));

//console.dir(document.querySelector("div a"));
// console.dir(document.querySelectorAll("div a"));

let links = document.querySelectorAll(".box a");
for(links of links){
    links.style.color = "purple";
}

// for(let i=0;i<links.length;i++){
//     links[i].style.color = "purple";
// }