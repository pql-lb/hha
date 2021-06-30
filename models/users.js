const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//If not admin then editor
const Provider = new Schema({
    name: String,
    password: String,
    admin: Boolean
})

module.exports = mongoose.model('User', Provider)