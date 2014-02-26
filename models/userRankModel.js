var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var userRank = new Schema({
	id: Schema.ObjectId,
	description: String
})

module.exports = {
	model: mongoose.model('UserRank', userRank),
	schema: userRank
}
