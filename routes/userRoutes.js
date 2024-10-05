const express = require('express')
const userController = require('../controller/userController')
const router = express.Router()

router.post('/register', userController.Register)
router.post('/login', userController.Login)
router.get('/logout', userController.Logout)
router.get('/loggedIn', userController.LoggedIn)

module.exports = router