const router = require('express').Router()
const verifyToken = require('../middlewares/verifyToken')
const admin = require('../middlewares/admin')
const authorization = require('../middlewares/authorization')
const addToCart = require('../controllers/cart/addToCart')
const updateCart = require('../controllers/cart/updateCart')
const deleteProductFromCart = require('../controllers/cart/deleteProductFromCart')

router.post('/', verifyToken, addToCart)
router.put('/:id', authorization, updateCart)
router.delete('/:id', authorization, deleteProductFromCart)

module.exports = router