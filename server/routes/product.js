const router = require('express').Router()
const admin = require('../middlewares/admin')
const createProduct = require('../controllers/product/createProduct')
const updateProduct = require('../controllers/product/updateProduct')
const deleteProduct = require('../controllers/product/deleteProduct')

router.post('/', admin, createProduct)
router.put('/:id', admin, updateProduct)
router.delete('/:id', admin, deleteProduct)

module.exports = router