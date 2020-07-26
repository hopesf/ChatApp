function authControl( req, res, next ) {
    if(req.isAuthenticated() || req.session.user){
        next();
    }
    else{
        res.redirect('/');
    }
}

module.exports = authControl;