const express = require('express')
const userController = require('../controllers/user.controller')

const router = express.Router()

router.get('/', userController.getIndex)

router.get('/create', userController.getCreate)

router.post('/create', userController.postCreate)

router.get('/login', userController.getLogin)

router.post('/login', userController.postLogin)

module.exports = router


