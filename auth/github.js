const passport = require('passport');
const githubStrategy = require('passport-github').Strategy;

// models
const user = require('../models/users');

passport.use(
    new githubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_LOGIN_CALLBACK_URL
        },
        (accessToken, refreshToken, profile, done)=>{
            const data = profile._json;

            user.findOrCreate({
                'Id':data.id
            }, {
                name:data.name,
                profilePhotoUrl: data.avatar_url
            }, (err, user) =>{
                return done(err,user);
            });
        }
));

passport.serializeUser((user, done) =>{
    done(null, user);
});

passport.deserializeUser((user, done) =>{
    done(null, user);
});

module.exports = passport;