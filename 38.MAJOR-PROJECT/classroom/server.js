const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");
const path= require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {
    secret: "mysupersecretstring",
    resave:false,
    saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());

app.use((req,res,next) =>{
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
})

app.get("/register", (req,res) => {
    let {name="anonymous"} = req.query;
   req.session.name = name;
   req.flash("success","user register successfullly");
   if(name == "anonymous") {
    req.flash("error","user not registered");
   }else{
    req.flash("success","user register successfully")
   }
   res.redirect("/hello");
});

app.get("/hello", (req,res) => {
    res.render("page.ejs", {name:req.session.name });
});

//app.use(session({ secret: "my supersecretstring", resave: false, saveUninitialized: true }));

// app.get("/reqcount", (req, res) => {
//     if(req.session.count) {
//         req.session.count++;
//     }else{
//     req.session.count = 1;
// }
//     res.send(`you send request ${req.session.count} times`)
// });


// app.get("/test",(req,res) => {
//     res.send("test successfuly");
// });










//const cookieParser = require("cookie-parser");

// app.use(cookieParser("secretcode"));

// app.get("/getsignedcookie",(req,res) => {
//     res.cookie("made-in","India",{signed: true});
//     res.send("signed cookie send")
// });

// app.get("/verify",(req,res) =>{
//     console.log(req.signedCookies);
//     console.log(req.cookies);
//     res.send("verified")
// });


// app.get("/getcookies",(req,res) =>{
//     res.cookie("greet","namaste");
//     res.cookie("madeIN","India");
//     res.send("sent you some cookies!");
// });

// app.get("/greet",(req,res) =>{
//     let { name = "anonymous"} = req.cookies;
//     res.send(`Hi, ${name}`);
// });

// app.get("/",(req,res) => {
//     console.dir(req.cookies);
//     res.send("Hi, I am root");
// });


// app.get("/",(req,res)=>{
//     res.send("i am root")
// });

// app.use("/users",users);
// app.use("/posts",posts);



app.listen(8080, () => {
    console.log("server is litening in port 8080");
});