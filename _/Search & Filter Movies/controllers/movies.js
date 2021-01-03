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

    // Add Movie Form
    router.get('/add', function(req, res){
      res.render('addmovies');
    });

    // Add Movie POST
    router.post('/add', function(req, res){
        req.checkBody('title','Title is required').notEmpty();

        var errors = req.validationErrors();

        if(errors){
          res.render('addmovies',{errors: errors});
        } else {
          var title = req.body.title && req.body.title.trim();
          var release_date = req.body.release_date && req.body.release_date.trim();
          var genre = req.body.genre && req.body.genre.trim();
          var director = req.body.director && req.body.director.trim();
          var plot = req.body.plot && req.body.plot.trim();
          var trailer= req.body.trailer && req.body.trailer.trim();
          var cover = req.body.cover && req.body.cover.trim();

          var newMovie = new Movie({
            title: title,
            release_date: release_date,
            genre: genre,
            director: director,
            plot: plot,
            cover: cover,
            trailer: trailer
          });

          newMovie.save(function(err){
            if(err){
              res.send(err);
            }
            res.redirect('/movies');
          });
        }
    });

    // Details Page
    router.get('/details/:id', function(req, res){
      Movie.findOne({_id: req.params.id}, function(err, movie){
        if(err){
          res.send(err);
        }
        res.render('details', {movie: movie});
      });
    });

    // Delete Movie
    router.delete('/delete/:id', function(req, res){
      Movie.remove({_id: req.params.id}, function(err){
        if(err){
          res.send(err);
        }
        res.status(204).send();
      })
    });

    // Edit Page
    router.get('/edit/:id', function(req, res){
      Movie.findOne({_id: req.params.id}, function(err, movie){
        if(err){
          res.send(err);
        }
        res.render('editmovie', {movie: movie});
      });
    });

    // Update Movie POST
    router.post('/edit/:id', function(req, res){
        req.checkBody('title','Title is required').notEmpty();

        var errors = req.validationErrors();

        if(errors){
          Movie.findOne({_id: req.params.id}, function(err, movie){
            if(err){
              res.send(err);
            }
            res.render('editmovie', {errors:errors,movie: movie});
          });
        } else {
          var title = req.body.title && req.body.title.trim();
          var release_date = req.body.release_date && req.body.release_date.trim();
          var genre = req.body.genre && req.body.genre.trim();
          var director = req.body.director && req.body.director.trim();
          var plot = req.body.plot && req.body.plot.trim();
          var trailer= req.body.trailer && req.body.trailer.trim();
          var cover = req.body.cover && req.body.cover.trim();

          var updMovie = {
            title: title,
            release_date: release_date,
            genre: genre,
            director: director,
            plot: plot,
            cover: cover,
            trailer: trailer
          };

          Movie.update({_id:req.params.id}, updMovie, function(err){
            if(err){
              res.send(err);
            }
            res.redirect('/movies');
          });
        }
    });

    // Search movies
    router.post('/search', function(req, res){
        Movie.search(req.body.searchText, {title: 1, plot: 1, cover: 1},{
          conditions: {title:{$exists: true}, plot: {$exists: true}, cover:{$exists: true}},
          sort: {title: 1},
          limit: 10
        }, function(err, movies){
          if(err){
            res.send(err);
          }
          var model = {
            movies: movies.results
          }
          res.render('movies', model);
        });
    });

    // Filter genre
  router.get('/genre/:genre', function (req, res) {
        Movie.find({genre:req.params.genre}, function(err, movies){
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
