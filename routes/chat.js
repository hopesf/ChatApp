const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('chat');
    console.log(req.user);
});


module.exports = router;
