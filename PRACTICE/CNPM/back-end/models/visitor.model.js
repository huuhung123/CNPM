const mongoose = require('mongoose')

const visitorSchema = mongoose.Schema({
    name: {
        type: String,
        requied: true
    },
    age: {
        type: Number,
        requied: true
    }
});

const Visitor = module.exports = mongoose.model('Visitor', visitorSchema)