//
// # SimplestServer
//
// by Rick Kozak

//require statements -- this adds external modules from node_modules or our own defined modules
var http = require('http');
var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var Post = require('./models/Post.js');

//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);

//establish connection to our mongodb instance
//use your own mongodb instance here
mongoose.connect('mongodb://digvijayyelve111:Migitizer1@ds123752.mlab.com:23752/insta');


//sample code that creates a Post object
var post = new Post({ 
  image: './img/glyphicons-halflings-white.png',
  comment: 'cool glphicon',
  likeCount: 0,
  feedbackCount: 0
});
//and then saves it to the mongodb instance we connected to above
post.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('posted');
  }
});

//tell the router (ie. express) where to find static files
router.use(express.static(path.resolve(__dirname, 'client')));
//tell the router to parse JSON data for us and put it into req.body
router.use(express.bodyParser());

//tell the router how to handle a get request to the root 
router.get('/', function(req, res){
  console.log('client requests posts.html');
  //use sendfile to send our posts.html file
  res.sendfile(path.join(__dirname, 'client/view','posts.html'));
});

//tell the router how to handle a post request to /posts
router.post('/posts', function(req, res){
  console.log('client requests posts list');
  
  //go find all the posts in the database
  Post.find({})
  .then(function(paths){
    //send them to the client in JSON format
    res.json(paths);
  })
  
  //this code just creates some posts directly without going to the database
  //res.json([
  //  {image: 'img/test.jpg', comment: 'test message 1'},
  //  {image: 'img/test.jpg', comment: 'test message 2'}
  //]);
});

//tell the router how to handle a post request to /incrLike
router.post('/incrLike', function(req, res){
  console.log('increment like for ' + req.body.id);
  //the client will send us the ID for the post for which we should increment the like
  //this will be in req.body.id
  //so far, we are just going to respond with a count of 1
  //we don't have to send back the ID, but it will make the client side code easier
  res.json({id: req.body.id, count: 1});  
});

//set up the HTTP server and start it running
server.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0', function(){
  var addr = server.address();
  console.log('Server listening at', addr.address + ':' + addr.port);
});
