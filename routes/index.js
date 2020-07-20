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
  const id = crypto.randomBytes(16).toString("hex");

  user.findOrCreate({
    'kadi':kadi
  }, {
    Id:id,
    sifre: sifre
  }, (err, user) =>{
    console.log(user);
    return res.end();
  });

});

module.exports = router;
