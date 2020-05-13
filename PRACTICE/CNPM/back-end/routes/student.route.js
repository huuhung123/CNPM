const express = require('express')
const studentController = require('../controllers/student.controller')

const router = express.Router()

router.get('/', studentController.getIndex)

router.get('/create', studentController.getCreate)

router.post('/create', studentController.postCreate)

router.get('/update', studentController.getUpdate)

router.get('/delete', studentController.getDelete)

module.exports = router


