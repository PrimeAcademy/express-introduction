var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var songRouter = require('./routes/songs');

var app = express();

// middleware for parsing the body and turning it into a JS object
app.use(bodyParser.urlencoded({extended: true}));

// middleware for serving static files
app.use(express.static('public'));

// send any requests that start with /songs to the songRouter
app.use('/songs', songRouter);

// middleware function, gets executed on each request
app.use(function(req, res, next){
  console.log('Got a request!');
  next();
});

app.get('/', function(req, res){
  console.log('Received a request at', new Date());
  // __dirname is the folder this file lives in
  var filename = path.join(__dirname, 'public/views/index.html');
  console.log('filename:', filename);
  res.sendFile(filename);
});

app.listen(3000);
