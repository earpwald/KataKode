var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var userRole = new Schema({
	id : Schema.ObjectId,
	description : String
});

module.exports = {
	model: mongoose.model('UserRole', userRole),
	schema: userRole
}

/*var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , FoodItemSchema = require('../models/fooditem.js');

var emailSchema = new Schema({
    From: String,
    Subject: FoodItemSchema,
    Body: String,
    Date: Date,
    FoodItems: [FoodItemSchema],
    Owner: { type: Schema.Types.ObjectId , ref: 'User' }
});

module.exports = {
    model: mongoose.model('Email', emailSchema),
    schema: emailSchema 
}
*/
