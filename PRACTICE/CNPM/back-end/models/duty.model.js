const mongoose = require('mongoose')

const dutySchema = mongoose.Schema({
    name: {
        type: String,
        requied: true
    },
    time: {
        type: String,
        requied: true
    },
    phone: {
        type: String,
        requied: true
    },
    place: {
        type: String,
        requied: true
    }
});

const Duty = module.exports = mongoose.model('Duty', dutySchema)