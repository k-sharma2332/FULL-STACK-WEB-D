const express = require("express");
 const app = express();

 console.dir(app);

 let port = 8080;

 app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
 });

//  app.use((req,res) => {
//   //console.log(req);
//    console.log("request received");
//    res.send({

//     name: "apple",
//     color: "red",

//    });
//  });
app.get("/",(req , res)=>
{
  res.send("you contacted root path");
}
)
app.get("/apple",(req , res)=>
  {
    res.send("you contacted root path");
  }
  );

  app.get("*",(req,res)=>{
  res.send("this path is not define")});

  app.post("/",(req,res) => {
    res.send("you sent a post request")
  });