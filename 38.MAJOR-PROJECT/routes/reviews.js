const express = require(`express`);
const router = express.Router({mergeParams : true});
const Listing = require(`../models/listing.js`);
const ExpressError = require(`../utils/expressError.js`);
const wrapAsync = require(`../utils/wrapAsync.js`);
const Review = require(`../models/review.js`);
const {isLoggedIn, isOwner, isAuthor, validateRatings} = require(`../middlewares.js`);
const { createReview } = require("../controllers/reviews.js");


const reviewController = require("../controllers/reviews.js");


// 01. Review Delete Route : For Deleting The Requested Review And Removing It From The Parent Listing.
router.delete(`/:reviewId`, isLoggedIn,isAuthor,wrapAsync(reviewController.destroyReview));

// 02. Review Route : Adding A New Review For An Already Existing Listing
router.post(``, validateRatings, isLoggedIn, wrapAsync(reviewController.createReview));
module.exports = router;