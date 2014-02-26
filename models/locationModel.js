var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	CountrySchema = require('./countryModel.js');

var location = new Schema({
	id : Schema.ObjectId,
	city : String,
	country : CountrySchema
});

module.exports = {
	model: mongoose.model('Location', location),
	schema: location
}
