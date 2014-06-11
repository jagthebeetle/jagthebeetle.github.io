var searchLimit = 5;

/**************\
  DEPENDENCIES
\**************/

var Models = require('./models');

exports.index = function(res) {
	Models.entry.find().sort('-created').limit(searchLimit)
		.exec(function(err,entries) {
			if(err) {
				return console.log('Entry model database error.');
			} else {
				res.render('index',{entries:entries});
			}
		});
}