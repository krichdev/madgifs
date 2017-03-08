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
      var tvGif = response.data[0].images.downsized.url;
      callback(null, tvGif);
    });
  }

  function celeb(callback){
    var q = req.query.celeb;
    giphy.search({
      q: q,
      rating: 'pg-13',
      limit: 1
    }, function(err, response) {
      var celebGif = response.data[0].images.downsized.url;
      callback(null, celebGif);
    });
  }

  function reaction(callback){
    var q = req.query.reaction;
    giphy.search({
      q: q,
      rating: 'pg-13',
      limit: 1
    }, function(err, response) {
      var reactionGif = response.data[0].images.downsized.url;
      callback(null, reactionGif);
    });
  }

  function emotion(callback){
    var q = req.query.emotion;
    giphy.search({
      q: q,
      rating: 'pg-13',
      limit: 1
    }, function(err, response) {
      var emotionGif = response.data[0].images.downsized.url;
      callback(null, emotionGif);
    });
  }

  async.series([tvShow, celeb, reaction, emotion], function(err, results) {
    console.log(results);
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
