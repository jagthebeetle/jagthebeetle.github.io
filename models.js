/**************\
  DEPENDENCIES
\**************/
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var entrySchema = new Schema({
	title:String,
	created:{type:Date,default:Date.now},
	body:String
});

/********\
  EXPOSE
\********/
exports.entry = mongoose.model('Entry',entrySchema);