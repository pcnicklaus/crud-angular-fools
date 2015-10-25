var mongoose = require('mongoose-q')(require('mongoose', {
    spread: true
}));
var Schema = mongoose.Schema;


var Fool = new Schema({
    name: String,
    age: Number
});


module.exports = mongoose.model('fools', Fool);