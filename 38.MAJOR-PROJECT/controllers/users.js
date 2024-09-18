const User = require("../models/user"); 

module.exports.renderSigupForm = (req, res) => {
    res.render("users/signup.ejs");
}

module.exports.signup = async (req, res, next) => {
    try {
        let {username, password, email} = req.body;
        const newUser = new User({username, email});
        const registeredUser = await User.register(newUser, password);
        req.login(newUser, (error) => {
            if (error){
                return next(error);
            } else {
                req.flash("Success", "Welcome To WanderLust!");
                res.redirect("/listings");
            }
        });
    } catch(error){
        req.flash("error", error.message);
        res.redirect("/signup");
    }
}

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
}


module.exports.login = async (req, res) => {
    req.flash("success", "Welcome Back To Wanderlust!");
    if (res.locals.redirectUrl){
        return res.redirect(res.locals.redirectUrl);
    } else  {
        return res.redirect(`/listings`);
    }
}

module.exports.logout = (req, res, next) => {
    req.logout((error) => {
        if (error){
            return next(error);
        } else {
            req.flash("success", "You Are Logged Out Now!");
            res.redirect("/listings");
        }
    })
};