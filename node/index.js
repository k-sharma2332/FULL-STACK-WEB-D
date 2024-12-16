const express = require('express');
const app = express();

const userModel = require('./usermodel');



app.get('/',(req,res)=>{
    res.send("heyy");
});

app.get("/create",async(req,res)=>{
    let createuser = await userModel.create({
        name:"khushi",
        email:"khushi@23.com",
        username:"khushi"
    })

    res.send(createuser);
})

app.listen(8080);