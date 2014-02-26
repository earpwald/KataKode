var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    UserSchema = require('./userModel.js');
    
var commentSchema = new Schema({
    id : Schema.ObjectId,
    score : Number,
    comment : String,
    createDate : Date,
    createUser : UserSchema,
    modifiedDate : Date,
    modifiedUser : UserSchema
});

module.exports = {
    model: mongoose.model('Comment', commentSchema),
    schema: commentSchema
}
