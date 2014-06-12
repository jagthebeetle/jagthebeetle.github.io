var searchLimit = 1;

/**************\
  DEPENDENCIES
\**************/

var Models = require('./models');

exports.index = function(req,res) {
	res.sendfile('index.html');
};

exports.api = function(req,res) {
	if (req.params.date !== undefined) {
		console.log("Fetching post older than " + req.params.date);
		var limit = new Date(req.params.date);
		Models.entry.find({'created':{"$lt":limit}})
			.lean().sort('-created').limit(searchLimit)
			.exec(function(err,entries) {
				if(err)
					return console.log('Entry model database error.');
				else	
					res.json(entries);
			});
	} else {
		Models.entry.find().lean().sort('-created').limit(searchLimit)
			.exec(function(err,entries) {
				if(err)
					return console.log('Entry model database error.');
				else	
					res.json(entries);
			});
	}
}