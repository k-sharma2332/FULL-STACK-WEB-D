const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine" , "ejs");
app.set("views",path.join(__dirname,"/views"))

app.get("/" , (req,res) =>{
    res.render("home");
});

app.get("/ig/:username",(req,res) => {
    const followers = ["adam","jeet","veer","ram"];
    let {username } = req.params;
    res.render("instagram.ejs",{username,followers});
});




app.get("/hello",(req,res)=>{
    res.send("hello");
});

app.get("/rolldice",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6) + 1;
    res.render("rollDice.ejs",{ diceVal});
});

app.listen(port,() => {
    console.log("listening to port : 8080");
});