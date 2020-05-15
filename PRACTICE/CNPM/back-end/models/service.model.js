const mongoose = require('mongoose')

const serviceSchema = mongoose.Schema({
    name: {
        type: String,
        requied: true
    },
    service: {
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

const Service = module.exports = mongoose.model('Service', serviceSchema)