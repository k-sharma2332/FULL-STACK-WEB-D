const express = require("express");
const app = express();
const port = 8080;
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get ("/register",(req,res)=>{
    let {user,password} = req.query;
    res.send(`Stanndard Get response Welcome${user}`);
});

app.post ("/register",(req,res)=>{
    console.log(req.boby);
    res.send("standard POST responce ");
});

app.listen(port,() => {
    console.log(`listening to port ${port}`);
});