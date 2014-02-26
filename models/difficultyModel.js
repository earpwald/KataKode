var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var difficultySchema = new Schema({
    id : Schema.ObjectId,
    descripton : String
});

module.exports = {
    model: mongoose.model('Difficulty', difficultySchema),
    schema: difficultySchema
}
