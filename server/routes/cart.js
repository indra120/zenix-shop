const router = require('express').Router()
const verifyToken = require('../middlewares/verifyToken')
const admin = require('../middlewares/admin')
const authorization = require('../middlewares/authorization')
const addToCart = require('../controllers/cart/addToCart')
const updateCart = require('../controllers/cart/updateCart')

router.post('/', verifyToken, addToCart)
router.put('/:id', authorization, updateCart)

module.exports = router