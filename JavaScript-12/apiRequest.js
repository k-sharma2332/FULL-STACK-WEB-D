let url  = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) => {
//     return res.json();
// })
// .then((data) => {
//     console.log("data1 = ",data.fact);
//     return fetch(url);
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log("data = ",data2.fact);
// })
// . catch((err) => {
//     console.log("ERROR - ",err);
// });

// console.log("i am happy");

async function getFacts(){
   try{
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
   }
   catch(e){
    console.log(e);
   }
   console.log("bye");
}