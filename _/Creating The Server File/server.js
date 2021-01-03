const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

const mongojs = require('mongojs');
const db = mongojs('clientkeeper', ['clients']);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/', (req, res) =>{
  res.send('Please use /api/clients');
});

app.listen(port, () => {
  console.log('Server started on port '+port);
});
