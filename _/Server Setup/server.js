const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

const port = 3000;

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next)=> {
  res.send('test');
});

server.listen(port, () => {
  console.log('Server started on port '+port);
});
