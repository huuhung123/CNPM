const express = require('express')
const visitorController = require('../controllers/visitor.controller')
const router = express.Router()

router.get('/', visitorController.getIndex)

router.get('/create', visitorController.getCreate)

router.post('/create', visitorController.postCreate)

router.get('/update', visitorController.getUpdate)

router.get('/delete', visitorController.getDelete)

module.exports = router


