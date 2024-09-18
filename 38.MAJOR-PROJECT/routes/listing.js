const express = require(`express`);
const router = express.Router();
const wrapAsync = require(`../utils/wrapAsync.js`);
const { isLoggedIn, isOwner, validateListings } = require(`../middlewares.js`);

const listingController = require("../controllers/listings.js")

router.route("/")
    .get(wrapAsync(listingController.index))
    // .post(isLoggedIn, validateListings, wrapAsync(listingController.createListing));
    .post((req,res) => {
        res.send(req.body);
    })

// 02. New And Create Route : Adding A New Listing To Our Data
router.get(`/new`, isLoggedIn, listingController.renderNewForm);

router.route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(isLoggedIn, isOwner, validateListings, wrapAsync(listingController.updateListing))
    .delete(isLoggedIn, wrapAsync(listingController.destroyListing))




// 04. Edit And Update Route : Changing The Values Of The Existing Listings
router.get(`/:id/edit`, isLoggedIn, wrapAsync(listingController.renderEditForm));




// 05. Delete Route : Deleting An Already Existing Listing Along With Its All Related Reviews

module.exports = router;