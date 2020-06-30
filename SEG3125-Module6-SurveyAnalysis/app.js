// Entry point for the application

// console.log("HELLO WORLD")


// express application
var express = require('express');
// require the controller we make
var surveyController = require('./surveyController');

console.log("HELLO WORLD")

var app = express();

// set up template engine
app.set('view engine', 'ejs');

// static file serving
app.use(express.static('./public'));

// fire function from surveyController
surveyController(app);

// listen to port
app.listen(3000);
console.log('listening port 3000');