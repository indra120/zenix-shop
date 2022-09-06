const router = require('express').Router()
const signup = require('../controllers/signup')
const signin = require('../controllers/signin')

router.post('/signup', signup)
router.post('/signin', signin)

module.exports = router