const router = require('express').Router()
const authorization = require('../middlewares/authorization')
const admin = require('../middlewares/admin')
const editUser = require('../controllers/user/editUser')
const removeUser = require('../controllers/user/removeUser')
const getUser = require('../controllers/user/getUser')
const getUsers = require('../controllers/user/getUsers')
const getUserStats = require('../controllers/user/getUserStats')

router.put('/:id', authorization, editUser) // Edit user
router.delete('/:id', authorization, removeUser) // Remove user
router.get('/find/:id', admin, getUser) // Get user
router.get('/', admin, getUsers) // Get users
router.get('/stats', admin, getUserStats) // Get user stats

module.exports = router