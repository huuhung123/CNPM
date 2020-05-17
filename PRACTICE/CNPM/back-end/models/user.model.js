const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    user: {
        type: String,
        requied: true
    },
    password: {
        type: String,
        requied: true
    },
    createdTime: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', userSchema)