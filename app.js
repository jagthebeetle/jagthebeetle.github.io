/**************\
  DEPENDENCIES 
\**************/
var express = require('express'),
	app = express(),
	config = require('./config'),
	path = require('path'),
	mongoose = require('mongoose');

/************\
  INITIALIZE
\************/
// connect to db
mongoose.connect('mongodb://localhost/what');

// look for files in './public' directory
app.use(express.static(path.join(__dirname, 'public')));

config.setMiddleware(app);
config.setRoutes(app);

/********\ 
  DEPLOY 
\********/
var port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening on port " + port + ".");