var express = require('express');
var router = express.Router();
const NodeCouchDb = require('node-couchdb');

const couch = new NodeCouchDb({
    auth: {
        user: 'admin',
        pass: '1234'
    }
});
var uuid = require('node-uuid');

router.get('/', function(req, res, next) {
  const dbName = "bizlist";
  const viewUrl = "_design/allbusinesses/_view/all";

  const queryOptions = {};

  couch.get(dbName, viewUrl, queryOptions).then(({data, headers, status}) => {
    res.render('businesses', {
      businesses: data.rows
    });
  }, err => {
      res.send('err');
  });
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
    couch.insert("bizlist", {
      _id: uuid.v1(),
      name: req.body.name,
      category: req.body.category,
	 		website: req.body.website,
	    phone: req.body.phone,
	    address: req.body.address,
	    city: req.body.city,
	    state: req.body.state,
	    zip: req.body.zip
    }).then(({data, headers, status}) => {
        req.flash('success', 'Business Added');
        res.redirect('/businesses');
    }, err => {
      res.send(err);
    });
  }

});

router.post('/edit/:id', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/delete/:id', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
