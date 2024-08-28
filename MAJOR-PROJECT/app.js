const express = require("express");  
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
// const Listings = require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema , reviewSchema } = require("./schema.js");
const Review = require("./models/review.js");
const review = require("./models/review.js");


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

const validateListing = (req,res,next) => {
    let {error} = listingSchema.validate(req.body);
    
      if(error) {
        let errMsg = error.details.map((el) => el.message.join(","));
        throw new ExpressError(400, error);
      }
      else {
        next();
      }
};

const validateReview = (req,res,next) => {
    let {error} = reviewSchema.validate(req.body);
    
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
    const listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs",{listing});
}));

// Create route
app.post("/listings",validateListing,
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

//Delete Review 
app.delete("/listings/:id/reviews/reviewsId", wrapAsync(async(req,res)=>{
  let { id, reviewId} = req.params;
  await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
  await Review.findByIdAndDelete(reviewId);
    res.redirect(`listing/${id}`);
}));

// Delete route
app.delete("/listings/:id", wrapAsync(async(req,res) => {
    let { id } = req.params;
   let deletedListing= await Listing.findByIdAndDelete(id);
   console.log(deletedListing);
   res.redirect("/listings");
}));

//Reviews route
// post route
app.post("/listings/:id/reviews", validateReview , wrapAsync(async(req,res) => {
 
  let listing =  await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
  
  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();

res.redirect(`/listings/${req.params.id}`);
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