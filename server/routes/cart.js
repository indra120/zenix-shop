const router = require('express').Router()
const verifyToken = require('../middlewares/verifyToken')
const admin = require('../middlewares/admin')
const authorization = require('../middlewares/authorization')
const addToCart = require('../controllers/cart/addToCart')

router.post('/', verifyToken, addToCart)

module.exports = router