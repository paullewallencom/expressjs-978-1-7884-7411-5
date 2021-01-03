const express = require('express');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const NodeGeocoder = require('node-geocoder');
const redis = require('redis');

// Set port
const port = 3000

//Init app
const app = express();

// View engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// method-override
app.use(methodOverride('_method'));

// Search Store
app.get('/', (req, res, next) => {
  res.render('searchstore');
});

// Add Store
app.get('/addstore', (req, res, next) => {
  res.render('addstore');
});

app.listen(port, () => {
  console.log('Server started on port '+port);
});
