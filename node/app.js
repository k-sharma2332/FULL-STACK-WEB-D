const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views",path.join(__dirname , "views"));

app.set(express.static(path.join(__dirname,"public")));

let posts = [
    {
        username:"apnacollege",
        content:"I love coding"
    },
    {
        username:"khushi",
        content:"code run"
    },
    {
        username:"vir",
        content:"good"
    },
];



app.get("/posts",(req,res) => {
    res.render("index",{posts})
});


app.listen(port, () => {
    console.log("listening to port : 8080")
});