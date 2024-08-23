const express = require("express");  
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const Listings = require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema} = require("./schema.js");

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

const validation = (req,res,next) => {
    let {error} = listingSchema.validate(req.body);
    
      if(error) {
        let errMsg = error.details.map((el) => el.message.join(","));
        throw new ExpressError(400, error);
      }
      else {
        next();
      }
};

// Index route
app.get("/listings",wrapAsync(async(req,res) =>{
    const allListings = await Listing.find({});
        res.render("listings/index.ejs",{allListings});
  }));

// New route
app.get("/listings/new",(req,res) =>{
    res.render("listings/new.ejs")
});

// Show route
app.get("/listings/:id",wrapAsync(async(req,res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
}));

// Create route
app.post("/listings" , validateListing,
     wrapAsync(async(req,res,next) => {
      let result = listingSchema.validate(req.body);
      console.log(result);
      if(result.error) {
        throw new ExpressError(400, result.error);
      }
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listings");
    })
);

// Edit route
app.post("/listings/:id/edit",wrapAsync(async(req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    console.log(listing);
    res.render("listings/edit.ejs",{listing});
}));

// Update route
app.patch("/listings/:id",validateListing, wrapAsync(async(req,res) => {
    if(!req.boby.listing) {
        throw new ExpressError(400, "Send valid data for listing")
    }
    let {id} = req.params;
   await Listing.findByIdAndUpdate(id,{...req.body.listing});
   res.redirect(`/listings/${id}`);
}));

// Delete route
app.delete("/listings/:id", wrapAsync(async(req,res) => {
    let { id } = req.params;
   let deletedListing= await Listing.findByIdAndDelete(id);
   console.log(deletedListing);
   res.redirect("/listings");
}));

app.all("*", (req,res,next) =>{
    next(new ExpressError(404,"Page not found"));
});


// Middleware for errors
app.use((err,req,res,next) => {
    let {statusCode = 500, message="Something went wrong!"} = err;
    res.status(statusCode).render("error.ejs", {message});
    // res.status(statusCode).send(message);
    
});

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});