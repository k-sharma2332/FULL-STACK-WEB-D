const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");


const defaultImage = "https://unsplash.com/photos/a-view-of-a-waterfall-from-inside-a-cave-jYF1kn3eyHo";

const listingSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String
    },
    image: {
        type: String,
        default: defaultImage,
        set: (link) => link === "" ? defaultImage : link,
    },
    price: {
        type: Number
    },
    location: {
        type: String
    },
    country: {
        type: String
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review",
    }],
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }

});




const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;