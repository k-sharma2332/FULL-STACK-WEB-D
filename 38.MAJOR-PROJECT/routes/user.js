const express = require("express");
const router = express.Router({mergeParams : true});
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middlewares.js");

const userController = require("../controllers/users.js");

router.route("/signup")
.get( userController.renderSigupForm)
.post( wrapAsync(userController.signup));

router.route("/login")
.get(userController.renderLoginForm )
.post(saveRedirectUrl,passport.authenticate("local", { failureRedirect : "/login", failureFlash : true}), userController.login );




// 03. Logout Route : Logout Current User
router.get("/logout", userController.logout );

module.exports = router;