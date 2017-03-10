var express = require('express');
var giphy = require('giphy-api')();
var isLoggedIn = require('../middleware/isLoggedIn')
var flash = require('connect-flash');
var db = require('../models');
var router = express.Router();

//Render Profile Page
router.get('/', function(req, res){
  res.render('profile');
});

//POST favorite mad gif to user profile
router.post('/', function(req, res){
  console.log(req.body);
  db.favorite.create(req.body).then(function(){
    res.redirect('/profile')
  })
});





module.exports = router;
