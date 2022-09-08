const router = require('express').Router()
const admin = require('../middlewares/admin')
const createProduct = require('../controllers/product/createProduct')
const updateProduct = require('../controllers/product/updateProduct')
const deleteProduct = require('../controllers/product/deleteProduct')
const getProduct = require('../controllers/product/getProduct')
const getProducts = require('../controllers/product/getProducts')

router.post('/', admin, createProduct)
router.put('/:id', admin, updateProduct)
router.delete('/:id', admin, deleteProduct)
router.get('/find/:id', getProduct)
router.get('/', getProducts)

module.exports = router