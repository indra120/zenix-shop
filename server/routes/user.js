const router = require('express').Router()
const authorization = require('../middlewares/authorization')
const admin = require('../middlewares/admin')
const editUser = require('../controllers/editUser')
const removeUser = require('../controllers/removeUser')
const getUser = require('../controllers/getUser')
const getUsers = require('../controllers/getUsers')

router.put('/:id', authorization, editUser) // Edit
router.delete('/:id', authorization, removeUser) // Remove
router.get('/find/:id', admin, getUser) // Get user
router.get('/', admin, getUsers) // Get users

module.exports = router