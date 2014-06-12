/**************\
  DEPENDENCIES
\**************/

module.exports = function(models) {

	// hooks to which the router
	// can refer based on url entry point

	// root: will return the Ember app
	this.index = function(req,res) {
		res.sendfile('index.html');
	};

	/*	api: checks whether request is:
		- empty - assume this is the app's base request
	   	- /:date - get post older than date
	   	- /post/:id - locate specific post (not implemented)
		
		request information has been fully processed at this
		point; response object is sent to model for final 
		processing.
	*/
	this.api = function(req,res) {
		// if (/:date)
		if (req.params.date !== undefined) {
			var limit = new Date(req.params.date);
			models.entry.getOlder(res,limit);
		} else { //empty
			models.entry.getOne(res);
		}
	}

	this.error = function(req,res) {
		console.log("Not found");
		res.sendfile('404.html');
	}
}