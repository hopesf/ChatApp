const express = require('express');
const session = require('express-session');
const router = express.Router();

// random id
const crypto = require('crypto');

// user tablo
const user = require('../models/users');

session({
  secret: process.env.SESSION_SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 3600 * 24 * 30 * 2 }
});

router.get('/', (req, res, next) => {
  if (!req.session.user && !req.user)
    res.render('index', { title: 'Express' });
  else
    res.redirect('/chat');
});

router.post('/kayit', (req,res)=>{

  const { kayitk,kayits }= req.body;
  const id = crypto.randomBytes(16).toString("hex");

  user.findOrCreate({
    'kadi':kayitk
  }, {
    Id:id,
    sifre: kayits
  }, (err, user) =>{
    return res.redirect('/');
  });

});

router.post('/giris',(req,res)=>{
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
