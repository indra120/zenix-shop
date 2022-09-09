const router = require('express').Router()
const verifyToken = require('../middlewares/verifyToken')
const admin = require('../middlewares/admin')
const authorization = require('../middlewares/authorization')
const createOrder = require('../controllers/order/createOrder')
const updateOrder = require('../controllers/order/updateOrder')
const deleteOrder = require('../controllers/order/deleteOrder')
const getUserOrder = require('../controllers/order/getUserOrder')

router.post('/', verifyToken, createOrder)
router.put('/:id', admin, updateOrder)
router.delete('/:id', admin, deleteOrder)
router.get('/find/:userIdid', authorization, getUserOrder)

module.exports = router