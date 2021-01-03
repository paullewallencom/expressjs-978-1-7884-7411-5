var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/add', function(req, res, next) {
  res.render('addbusiness');
});

router.get('/show/:id', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/edit/:id', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/category/:category', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add', function(req, res, next) {
  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('category', 'Category is required').notEmpty();
  req.checkBody('city', 'City is required').notEmpty();

  var errors = req.validationErrors();

  if(errors){
    res.render('addbusiness', {
      errors: errors
    });
  } else {

  }

});

router.post('/edit/:id', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/delete/:id', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
