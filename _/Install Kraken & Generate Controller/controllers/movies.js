'use strict';

var MoviesModel = require('../models/movies');


module.exports = function (router) {

    var model = new MoviesModel();

    router.get('/', function (req, res) {
        
        
        res.render('movies', model);
        
        
    });

};
