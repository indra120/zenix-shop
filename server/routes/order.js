const router = require('express').Router()
const verifyToken = require('../middlewares/verifyToken')
const admin = require('../middlewares/admin')
const authorization = require('../middlewares/authorization')
const createOrder = require('../controllers/order/createOrder')

router.post('/', verifyToken, createOrder)

module.exports = router