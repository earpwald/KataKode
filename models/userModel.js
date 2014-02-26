var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	LocationSchema = require('./locationModel.js'),
	LanguageSchema = require('./languageModel.js'),
	UserRankSchema = require('./userRankModel.js'),
	UserRoleSchema = require('./userRoleModel.js');

var userSchema = new Schema({
	id : Schema.ObjectId,
	firstName : String,
	lastName : String,
	displayName : String,
	rank : UserRankSchema,
	score : Number,
	role : UserRoleSchema,
	email : String,
	password : String,
	language : LanguageSchema,
	createDate : Date,
	modifiedDate : Date
});

module.exports = {
	model: mongoose.model('User', userSchema),
	schema: userSchema
}
