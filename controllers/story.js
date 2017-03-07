var express = require('express');
var giphy = require('giphy-api')();
var router = express.Router();

router.get('/', function(req, res){
  // res.send(req.query.gif);
  var q = req.query.gif;
  giphy.search({
      q: q,
      rating: 'pg-13',
      limit: 1
  }, function (err, response) {
      // Res contains gif data!
      var gifURL = response.data[0].images.downsized.url;
      res.render('story', {result: gifURL})
      // console.log(response.data[0].images.downsized.url)
  });
});










module.exports = router;
