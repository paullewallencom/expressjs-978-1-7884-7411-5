'use strict';

var Movie = require('../models/movies');


module.exports = function (router) {

    var model = new Movie();

    // Movie Listings
    router.get('/', function (req, res) {
      Movie.find({}, function(err, movies){
        if(err){
          res.send(err);
        }
        var model = {
          movies: movies
        }

        res.render('movies', model);
      });
    });
};
