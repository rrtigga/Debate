var mongoose  = require('mongoose');
var Schema  = mongoose.Schema;

var DebateSchema = new Schema({
    topic: String,
    tags: String,
    argument: String
}, {collection: 'debates'});

module.exports = mongoose.model('debates', DebateSchema);