var searchLimit = 1;
/**************\
  DEPENDENCIES
\**************/
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var entrySchema = new Schema({
	title:String,
	created:{type:Date,default:Date.now},
	body:String
},{
	toObject:{
		virtuals:true // ember hackery
	}
});

// ember hackery, indeed.
// if the controller (controllers.js) makes .lean() queries,
// virtuals will not be returned.
entrySchema.virtual('id').get(function() {
	return this._id;
});

var entry = mongoose.model('Entry',entrySchema)

/********\
  EXPOSE
\********/
exports.entry = {
	getOlder:function(res,dateLimit) {
		entry.find({'created':{"$lt":dateLimit}})
			.lean().sort('-created').limit(searchLimit)
			.exec(function(err,entries) {
				if(err)
					return console.log('Entry model database error.');
				else	
					res.json(entries);
			});
	},
	getOne:function(res) {
		entry.find().lean().sort('-created')
			.limit(searchLimit)
			.exec(function(err,entries) {
				if(err)
					return console.log('Entry model database error.');
				else
					res.json(entries);
			});
	}
}