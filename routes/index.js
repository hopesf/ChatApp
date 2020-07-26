const express = require('express');
const router = express.Router();

// random id
const crypto = require('crypto');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
