module.exports = function(controller) {
	// initializer function,
	// executed in config.js
	this.initialize = function(app) {
		// add routes to app object
		app.get('/',controller.index)
		   .get('/api/:date?',controller.api)
		   .get('/api/post/:id'); // non-optional param
		
		// all non-specified routes
		app.use(controller.error);  
	}
}