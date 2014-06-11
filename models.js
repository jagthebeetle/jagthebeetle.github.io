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
entrySchema.virtual('id').get(function() {
	return this._id;
});

/********\
  EXPOSE
\********/
exports.entry = mongoose.model('Entry',entrySchema);