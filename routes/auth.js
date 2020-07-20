const express = require('express');
const router = express.Router();
const passportGoogle = require('../auth/google');
const passportGithub = require('../auth/github');

//google auth
router.get('/google',
    passportGoogle.authenticate(
        'google',
        {
            scope: ['profile']
        }
    ));

router.get('/google/callback',
    passportGoogle.authenticate(
    'google',
    {
        failureRedirect: '/'
    }),
    (req, res) => {
        res.redirect('/chat');
    });

// github auth

router.get('/github',
    passportGithub.authenticate(
        'github'
    ));

router.get('/github/callback',
    passportGithub.authenticate(
    'github',
    { failureRedirect:'/'
    }),
    (req,res)=>{
        res.redirect('/chat');
    });


module.exports = router;