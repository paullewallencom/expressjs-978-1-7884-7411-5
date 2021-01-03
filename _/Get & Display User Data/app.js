var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var api = require('instagram-node').instagram();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret:'secret',
  saveUninitialized: true,
  resave: true
}));

// Global vars
app.use(function(req, res, next){
  next();
});

// INSTAGRAM STUFF
api.use({
  client_id:'70902a35ac42406d8ada5d3612518f35',
  client_secret:'a2cbe2afcad445aeb371bb46c9312a87'
});

var redirect_uri = 'http://localhost:3000/handleauth';

exports.authorize_user = function(req, res) {
  res.redirect(api.get_authorization_url(redirect_uri, { scope: ['likes'], state: 'a state' }));
};

exports.handleauth = function(req, res) {
  api.authorize_user(req.query.code, redirect_uri, function(err, result) {
    if (err) {
      console.log(err.body);
      res.send("Didn't work");
    } else {
      /*
      console.log('Access Token ' + result.access_token);
      console.log('User ID ' + result.user.id);
      res.send('You made it!!');
      */
      req.session.accesstoken = result.access_token;
      req.session.uid = result.user.id;

      api.use({access_token: req.session.accesstoken});
      res.redirect('/main');
    }
  });
};

// Index route
app.get('/', function(req, res, next){
  res.render('index', {
    title: 'Welcome'
  });
});

// Main route
app.get('/main', function(req, res, next){
  api.user(req.session.uid, function(err, result, remaining, limit){
    if(err){
      res.send(err);
    }
    res.render('main', {
      title: 'My Instagram',
      user: result
    });
  });
});

// Logout route
app.get('/logout', function(req, res, next){
  req.session.accesstoken = false;
  req.session.uid = false;
  res.redirect('/');
});

// Login routes
app.get('/login', exports.authorize_user);
// Handleauth route
app.get('/handleauth', exports.handleauth);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
