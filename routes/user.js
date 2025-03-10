const express = require('express')
const { register, logIn, logOut, getOne } = require('../controllers/user')

const router = express.Router()

router.post('/register', register)
router.post('/login', logIn)
router.delete('/logout', logOut)


module.exports = router