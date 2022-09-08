const router = require('express').Router()
const admin = require('../middlewares/admin')
const create = require('../controllers/product/create')
const update = require('../controllers/product/update')

router.post('/', admin, create)
router.put('/:id', admin, update)

module.exports = router