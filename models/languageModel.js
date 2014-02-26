var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var language = new Schema({
	id : Schema.ObjectId,
	description : String
});

module.exports = {
	model: mongoose.model('Language', language),
	schema: language
}
