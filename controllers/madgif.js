var express = require('express');
var giphy = require('giphy-api')();
var async = require('async');
var router = express.Router();

router.get('/', function(req, res){
  res.render('madgif');
});

router.get('/story', function(req, res){
  function tvShow(callback){
    var q = req.query.tvshow;
    giphy.search({
      q: q,
      rating: 'pg-13',
      limit: 1
    }, function(err, response) {
      return response.data[0].images.downsized.url;
    });
  }

  function celeb(callback){
    var q = req.query.celeb;
    giphy.search({
      q: q,
      rating: 'pg-13',
      limit: 1
    }, function(err, response) {
      return response.data[0].images.downsized.url;
    });
  }

  function reaction(callback){
    var q = req.query.reaction;
    giphy.search({
      q: q,
      rating: 'pg-13',
      limit: 1
    }, function(err, response) {
      return response.data[0].images.downsized.url;
    });
  }

  function emotion(callback){
    var q = req.query.emotion;
    giphy.search({
      q: q,
      rating: 'pg-13',
      limit: 1
    }, function(err, response) {
      return response.data[0].images.downsized.url;
    });
  }

  async.series([tvShow, celeb, reaction, emotion], function(err, results) {
    res.send(results);
  });

})


// var q = req.query.gif;
// giphy.search({
//     q: q,
//     rating: 'pg-13',
//     limit: 1
// }, function (err, response) {
//     // Res contains gif data!
//     var gifURL = response.data[0].images.downsized.url;
//     res.render('story', {result: gifURL})
//     // console.log(response.data[0].images.downsized.url)
// });



module.exports = router;
