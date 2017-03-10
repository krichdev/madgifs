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
  var favTv = req.body.favTv;
  var favCeleb = req.body.favCeleb;
  var favReaction = req.body.favReaction;
  var favEmotion = req.body.favEmotion;
  res.send('Tv Show: ' + favTv);
  // db.favorite.create(req.body).then(function(){
  //   res.redirect('/profile')
  // })
});





module.exports = router;
