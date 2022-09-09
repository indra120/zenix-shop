const router = require('express').Router()
const verifyToken = require('../middlewares/verifyToken')
const admin = require('../middlewares/admin')
const authorization = require('../middlewares/authorization')
const createOrder = require('../controllers/order/createOrder')
const updateOrder = require('../controllers/order/updateOrder')

router.post('/', verifyToken, createOrder)
router.put('/:id', admin, updateOrder)

module.exports = router