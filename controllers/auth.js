var express = require('express');
var db = require('../models');
var passport = require('../config/passportConfig');
var router = express.Router();

router.get('/login', function(req, res){
  res.render('auth/login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: "/profile",
  successFlash: "Logged In",
  failureRedirect: "/",
  failureFlash: "Invalid Username or Password"
}));

router.get('/signup', function(req, res){
  res.render('auth/signup');
});

router.post('/signup', function(req, res){
  db.user.findOrCreate({
    where: {email: req.body.email},
    defaults: {
      username: req.body.username,
      password: req.body.password
    }
  }).spread(function(user, wasCreated){
    if(wasCreated){
      passport.authenticate('local', {
        successRedirect: '/profile',
        successFlash: "Account Created and Logged In"
      })(req, res);
    } else {
      req.flash("error", "Email already exists");
      res.redirect('/auth/login');
    }
  }).catch(function(err){
    req.flash("error", err.message);
    res.redirect('/auth/signup');
  });
});

router.get('/logout', function(req, res){
  req.logout();
  req.flash("success", "You have logged out");
  res.redirect('/');
})


module.exports = router;
