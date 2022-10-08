const passport = require("passport");
const user = require("../models/user");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("../models/user")

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK
        },
        async function(accessToken, refreshToken, profile, cb) {
            try { 
                //findOne user based off their googleId property, if their googleId matches incoming profile ID, then we found user. .then: whatever user is returned is going to be accessible for next cb function.
                let user = await User.findOne({googleId: profile.id}) 
                //wait to find a user that matches googleId: profile.id. Whatever it returns, store it as user.  
                if(user) return cb(null, user)//if there is nothing, return null. otherwise, run the if statement
                user = await User.create({
                    name: profile.displayName,
                    googleId: profile.id,
                    email: profile.emails[0].value,
                    avatar: profile.photos[0].value
                })
                return cb(null, user);            
            } catch(err) {
                return cb(err)
            }
        }
    )
)

passport.serializeUser(function(user, cb) { //user was created/found above, then add to session.
    cb(null, user._id);
})

passport.deserializeUser(async function(userId, cb) {
    try {
        const user = await User.findById(userId)
        cb(null, user)
    }  catch (err) {
            cb(err)
    }
})