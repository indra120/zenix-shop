const router = require('express').Router()
const admin = require('../middlewares/admin')
const create = require('../controllers/product/create')

router.post('/', admin, create)

module.exports = router