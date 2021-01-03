const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// Port
const port = 3000;

// Init app
const app = express();

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// View Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  res.render('index');
});

app.listen(port, () => {
  console.log('Server running on port '+port);
});
