const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        requrie: true
    },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('user',userSchema);