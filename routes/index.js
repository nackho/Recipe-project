var express = require('express');
var router = express.Router();
const passport = require("passport")
const Recipe = require("../models/recipe");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const limitRecipe = 5;
  const latest = await Recipe.find({}).sort({_id: -1}).limit(limitRecipe); 
  const food = { latest }; 
    res.render('index', { title: "Nack's Recipe Book", food });
  })
    


//Google OAuth login route
router.get("/auth/google", passport.authenticate("google", {
  scope: ["profile", "email"],
  promt: "select_account"
}))

//Google OAuth callback route
router.get("/oauth2callback", passport.authenticate(
  "google", 
  {
    successRedirect: "/recipes",
    failureRedirect: "/recipes"
  }
))

//Google OAuth logout route
router.get("/logout", function(req, res, next) {
  req.logout(function(err) {
    if(err) return next(err)
      res.redirect("/recipes")
  })
})

module.exports = router;
