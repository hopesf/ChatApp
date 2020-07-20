const express = require('express');
const router = express.Router();

// user tablo
const User = require('../models/users');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/giris',(req,res)=>{
  const { kadi,sifre }= req.body;
  User.findOne({ kadi:kadi , sifre: sifre }, function (err,user){

    if(err){
      return res.status(500).send();
    }

    if(!user){
      return res.status(404).send();
    }

    return res.redirect('/chat');

  })
});



router.post('/kayit', (req,res)=>{

  const { kadi,sifre }= req.body;

  const newUser = User();
  newUser.kadi = kadi;
  newUser.sifre = sifre;
  newUser.save( (err,user)=>{

    if(err){
      return res.status(500).send();
    }

    return res.status(200).send();
  });

});

module.exports = router;
