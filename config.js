/**************\
  DEPENDENCIES
\**************/

var hbs = require('hbs'),
	controller = require('./controllers.js');

/************\
  MIDDLEWARE
\************/


/********\
  EXPOSE
\********/
exports.setMiddleware = function(app) {
	app.set('view engine','hbs');

	// handlebars helper
	hbs.registerHelper('formatDate',function(date) {
		var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		if (!date)
			return "";
		else
			return date.getDate() + " "
				+ months[date.getMonth()] + " "
				+ date.getFullYear(); 
	});

	console.log("Middleware set.");
}

exports.setRoutes = function(app) {
	app.get('/',function(req,res) {
		controller.index(res);
	});
	console.log("Routes set.");
}