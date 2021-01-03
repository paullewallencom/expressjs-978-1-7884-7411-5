var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/add', function(req, res, next) {
  res.send('respond with a resource');
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
  res.send('respond with a resource');
});

router.post('/edit/:id', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/delete/:id', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
