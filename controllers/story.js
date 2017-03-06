var express = require('express');
var giphy = require('giphy-api')();
var router = express.Router();

router.get('/', function(req, res){
  var q = req.query.gif;
  giphy.search({
    q: q,
    limit: 1,
    rating: 'pg-13'
  }, function(err, res){
    res.send(req.body);
  })

});










module.exports = router;
