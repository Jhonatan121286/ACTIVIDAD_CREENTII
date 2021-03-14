const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    fisrtName: String,
    lastName: String,
    email: String,
    age: Number,
    role: String

});

module.exports = mongoose.model('User', UserSchema);