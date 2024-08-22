const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    country : {
        type: String
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;