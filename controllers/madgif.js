var express = require('express');
var giphy = require('giphy-api')();
var flash = require('connect-flash');
var async = require('async');
var router = express.Router();
var r = Math.floor((Math.random() * 24));

router.get('/', function(req, res){
  res.render('madgif');
});

router.get('/story', function(req, res){
  function tvShow(callback){
    var q = req.query.tvshow;
    giphy.search({
      q: q,
      rating: 'pg-13'
    }, function(err, response) {
      var tvGif = response.data[r].images.downsized.url;
      callback(null, tvGif);
    });
  }

  function celeb(callback){
    var q = req.query.celeb;
    giphy.search({
      q: q,
      rating: 'pg-13'
    }, function(err, response) {
      var celebGif = response.data[r].images.downsized.url;
      callback(null, celebGif);
    });
  }

  function reaction(callback){
    var q = req.query.reaction;
    giphy.search({
      q: q,
      rating: 'pg-13'
    }, function(err, response) {
      var reactionGif = response.data[r].images.downsized.url;
      callback(null, reactionGif);
    });
  }

  function emotion(callback){
    var q = req.query.emotion;
    giphy.search({
      q: q,
      rating: 'pg-13'
    }, function(err, response) {
      var emotionGif = response.data[r].images.downsized.url;
      callback(null, emotionGif);
    });
  }

  async.series([tvShow, celeb, reaction, emotion], function(err, results) {
    res.render('story', {results: results});
    console.log(results);
  });

})

module.exports = router;
