const router = require('express').Router()
const signup = require('../controllers/auth/signup')
const signin = require('../controllers/auth/signin')

router.post('/signup', signup)
router.post('/signin', signin)

module.exports = router