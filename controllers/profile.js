var express = require('express');
var giphy = require('giphy-api')();
var isLoggedIn = require('../middleware/isLoggedIn')
var flash = require('connect-flash');
var router = express.Router();


router.get('/', isLoggedIn, function(req, res){
  res.render('profile');
});





module.exports = router;
