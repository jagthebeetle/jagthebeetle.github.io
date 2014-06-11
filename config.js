/**************\
  DEPENDENCIES
\**************/

var controller = require('./controllers.js');

/************\
  MIDDLEWARE
\************/


/********\
  EXPOSE
\********/
exports.setMiddleware = function(app) {
	console.log("Middleware set.");
}

exports.setRoutes = function(app) {
	app.get('/',controller.index)
	   .get('/api/:date?',controller.api);
	console.log("Routes set.");
}