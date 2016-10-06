var express = require('express');

// bring in the router from the express library
var router = express.Router();

var songs = [];

router.post('/', function(req, res){
  console.log('In songs.js, req.body:', req.body);
  songs.push(req.body);
  console.log('songs', songs);
  res.sendStatus(200);
});

router.get('/', function(req, res){
  res.send(songs);
});

router.get('/favorite', function(req, res){
  res.send({title:'People Are Strange', artist:'Echo and the Bunnymen'});
});

module.exports = router;
