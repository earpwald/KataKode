var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    AnswerSchema = require('./answerModel.js'),
    CommentSchema = require('./commentModel.js');
    
var answerCommentSchema = new Schema({
    id : Schema.ObjectId,
    answer : AnswerSchema,
    comment : CommentSchema
});

module.exports = {
    model: mongoose.model('AnswerComment', answerCommentSchema),
    schema: answerCommentSchema
}
