async function greet() {
    throw "some random error";
   return "hello";
}

greet()
.then((result)=>{
    console.log("promise was resolved");
    console.log("result was : ",result);

})
.catch((err) =>{
    console.log("promise was rejected :" , err);
});