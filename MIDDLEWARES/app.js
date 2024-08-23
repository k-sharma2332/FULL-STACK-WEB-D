const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");


const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token == "giveaccess") {
        next();
    }
    throw new ExpressError( 401 , "ACCESS DENIED");
};

// app.use((req,res,next) => {
//     console.log("Hi , I am  1st middleware");
//    return next();
// });

// app.use((req,res,next) => {
//     console.log("Hi , I am  2nd middleware");
//     next();
// });

app.use("/random", (req, res, next) => {
    console.log("I am only for random");
});


// app.get("/wrong",(req,res) => {
//     abcd = abcd;
// });
app.use((err,req,res,next) => {
    console.log("--------Error-----------");
    next(err);
});


app.get("/api", checkToken, (req, res) => {
    res.send("data")
});


app.get("/", (req, res) => {
    res.send("Hi , I am root");
});

app.use((req, res) => {
    res.status(400).send("page not found");
});

// logger - morgan
// app.use((req,res,next) =>{
//     req.time = Date.now();
//     console.log(req.method , req.hostname , req.path);
//     next();
// });


app.get("/random", (req, res) => {
    res.send("this is a random page");
});

app.listen(8080, () => {
    console.log("server listening to port 8080");
});