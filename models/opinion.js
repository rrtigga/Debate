var mongoose  = require('mongoose');
var Schema  = mongoose.Schema;

var OpinionSchema = new Schema({
    question: String,
    bodyText: String,
    imageURL: String
}, {collection: 'opinions'});

module.exports = mongoose.model('opinions', OpinionSchema);