var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    UserSchema = require('./userModel.js'),
    AnswerCommentSchema = require('./answerComment.js');
    KataSchema = 

var answerSchema = new Schema({
    id : Schema.ObjectId,
    
});

//I don't think I need these extra links....the main ones will just 
//have an aray of the comments that are relevant to it.  RESEARCH MORE
