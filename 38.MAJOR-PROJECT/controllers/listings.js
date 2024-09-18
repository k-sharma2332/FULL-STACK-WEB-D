const Listings = require("../models/listing");


module.exports.index = async (req, res, next) => {
    let result = await Listings.find({});
    res.render(`listings/index.ejs`, { result });
}

module.exports.renderNewForm = (req, res) => {
    res.render('listings/newListing.ejs');
}

module.exports.showListing = async (req, res, next) => {
    const { id } = req.params;
    let listing = await Listings.findById(id).populate({path:"reviews", populate: {
        path: "author",
    },
}).populate("owner");
    console.log(listing);
    if (!listing) {
        req.flash(`error`, `The Requested Listing Doesn't Exists!`);
        res.redirect(`/listings`);
    }
    res.render(`listings/show.ejs`, { listing });
}

module.exports.createListing = async (req, res, next) => {
    const newListing = new Listings(req.body.listing);
    newListing.owner = res.locals.user._id;
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect(`/listings`);
};

module.exports.renderEditForm = async (req, res, next) => {
    const { id } = req.params;
    let listing = await Listings.findById(id);
    if (!listing) {
        req.flash(`error`, `The Requested Listing Doesn't Exists!`);
        res.redirect(`/listings`);
    }
    res.render(`listings/update.ejs`, { listing });
}

module.exports.updateListing = async (req, res, next) => {
    const { id } = req.params;
    await Listings.findByIdAndUpdate(id, req.body.listing);
    req.flash("success", "Updated Requested Listing!");
    res.redirect(`/listings/${id}`);
}

module.exports.destroyListing = async (req, res, next) => {
    const { id } = req.params;
    await Listings.findByIdAndDelete(id)
    req.flash("success", "Requested Listing Deleted!");
    res.redirect(`/listings`);
}