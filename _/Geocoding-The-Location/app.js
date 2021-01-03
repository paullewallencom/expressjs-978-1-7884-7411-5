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

// API options
const options = {
  provider: 'google',

  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: 'AIzaSyDf_polCl7rtBs4AcKDHHYxY3VqzCvh1a0', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

// Search Store
app.get('/', (req, res, next) => {
  res.render('searchstore');
});

// Add Store
app.get('/addstore', (req, res, next) => {
  res.render('addstore');
});

// Form Submit
app.post('/store/add', (req, res, next) => {
  const id = req.body.id;
  const location = req.body.location;

  geocoder.geocode(location)
    .then((response) => {
      console.log(response);
      return;
    })
    .catch((err) => {
      console.log(err);
      return;
    });
});

app.listen(port, () => {
  console.log('Server started on port '+port);
});
