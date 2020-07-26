const express = require('express');
const router = express.Router();

// random id
const crypto = require('crypto');

// user tablo
const user = require('../models/users');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/giris',(req,res)=>{
  const { kadi,sifre }= req.body;
  user.findOne({ kadi:kadi , sifre: sifre }, function (err,user){

    if(!user){
      return res.send('Hatali giris');
    }

    return res.redirect('/chat');

  })
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

module.exports = router;
