const router = require('express').Router()
const verifyToken = require('../middlewares/verifyToken')
const admin = require('../middlewares/admin')
const authorization = require('../middlewares/authorization')
const addToCart = require('../controllers/cart/addToCart')
const updateCart = require('../controllers/cart/updateCart')
const deleteProductFromCart = require('../controllers/cart/deleteProductFromCart')
const getUserCart = require('../controllers/cart/getUserCart')
const getAllCart = require('../controllers/cart/getAllCart')

router.post('/', verifyToken, addToCart)
router.put('/:id', authorization, updateCart)
router.delete('/:id', authorization, deleteProductFromCart)
router.get('/find/:userId', authorization, getUserCart)
router.get('/', admin, getAllCart)

module.exports = router