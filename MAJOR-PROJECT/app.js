const express = require("express");  
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const Listings = require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
//ejs mate help to genrate templates

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(() => {
    console.log("connect to DB");
}).catch((err) =>{
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

app.get("/", (req, res) => {
    res.send("Root is working");
});

//index route
app.get("/listings",async(req,res) =>{
    const allListings = await Listing.find({});
        res.render("listings/index.ejs",{allListings});
    });

// new route
app.get("/listings/new",(req,res) =>{
    res.render("listings/new.ejs")
});

// show route
app.get("/listings/:id",async(req,res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
});

// Edit route
app.post("/listings/:id/edit",async(req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    console.log(listing);
    res.render("listings/edit.ejs",{listing});
});

// update route
app.patch("/listings/:id", async(req,res) => {
    let {id} = req.params;
   await Listing.findByIdAndUpdate(id,{...req.body.listing});
   res.redirect(`/listings/${id}`);
});

//delete route
app.delete("/listings/:id", async(req,res) => {
    let { id } = req.params;
   let deletedListing= await Listing.findByIdAndDelete(id);
   console.log(deletedListing);
   res.redirect("/listings");
});

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});