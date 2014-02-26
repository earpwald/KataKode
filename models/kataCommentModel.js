var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    KataSchema = require('./kataModel.js'),
    CommentSchema = require('./commentModel.js');
    
var kataCommentSchema = new Schema({
    id : Schema.ObjectId,
    kata : KataSchema,
    comment : CommentSchema
});

module.exports = {
    model: mongoose.model('KataComment', kataCommentSchema),
    schema: kataCommentSchema
}
