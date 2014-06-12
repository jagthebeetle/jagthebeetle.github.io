/********\
  gather
\********/

// Paradigm:
// M -> C -> R | Outside
// As the route is the app's entry point from the outside,
// it should encapsulate and delegate the res object to the controller(s),
// which will themselves route it to the appropriate model and method.
// The res will bounce back in the callback to the mongoose query.

// Constructors
var Controller = require('./controllers.js');
var Router = require('./routes.js');

/*************\ 
  INITIALIZE!
\*************/
var models = require('./models.js');
var controller = new Controller(models);
var routes = new Router(controller);

/********\
  expose
\********/

exports.setMiddleware = function(app) {
	console.log("Middleware set.");
}

exports.setRoutes = function(app) {
	routes.initialize(app);
	console.log("Routes set.");
}