const router = require('express').Router()
const verifyToken = require('../middlewares/verifyToken')
const editUser = require('../controllers/editUser')

router.put('/:id', verifyToken, editUser)

module.exports = router