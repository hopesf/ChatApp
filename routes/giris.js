const express = require('express');
const session = require('express-session');
const router = express.Router();

// user tablo
const user = require('../models/users');

session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
});


router.post('/',(req,res)=>{
    const { kadi,sifre }= req.body;
    user.findOne({ kadi:kadi , sifre: sifre }, function (err,user){

        if(!user){
            return res.send('Hatali giris');
        }
        else{
            req.session.user = user;
            console.log(req.session);
            return res.redirect('/chat');
        }

    })
});

module.exports = router;