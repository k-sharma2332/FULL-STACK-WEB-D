const Listing = require("../models/listing");
const Review = require("../models/review");


module.exports.createReview = async (req, res, next) => {
    let listing = await Listing.findById(req.params.id);
    let review = new Review(req.body.review);
    review.authorName = req.user.username;
    review.author = req.user._id;
    listing.reviews.push(review);
    console.log(review);
    await review.save();
    await listing.save();
    req.flash("success", "Added New Review!");
    res.redirect(`/listings/${req.params.id}`); 
}

module.exports.destroyReview = async (req, res, next) => {
    let {id, reviewId} = req.params;
    let review = await Review.findByIdAndDelete(reviewId);
    Listing.findByIdAndUpdate(id, {$pull :{reviews : reviewId}});
    req.flash("success", "Deleted Requested Review!");
    res.redirect(`/listings/${req.params.id}`); 
};