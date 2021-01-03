'use strict';

var mongoose = require('mongoose');
var searchPlugin = require('mongoose-search-plugin');

var moviesModel = function(){
  var movieSchema = mongoose.Schema({
    title: String,
    genre: String,
    plot: String,
    director: String,
    release_date: Date,
    trailer: String,
    cover: String
  });

  movieSchema.plugin(searchPlugin, {
    fields: ['title', 'plot', 'cover']
  });

  return mongoose.model('Movies', movieSchema);
}

module.exports = new moviesModel();
