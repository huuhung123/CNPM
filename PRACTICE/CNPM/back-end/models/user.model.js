const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    user: {
        type: String,
        requied: true
    },
    password: {
        type: String,
        requied: true
    }
});

const User = module.exports = mongoose.model('User', userSchema)