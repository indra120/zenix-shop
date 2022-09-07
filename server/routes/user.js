const router = require('express').Router()
const authorization = require('../middlewares/authorization')
const editUser = require('../controllers/editUser')
const removeUser = require('../controllers/removeUser')

router.put('/:id', authorization, editUser) // Edit
router.delete('/:id', authorization, removeUser) // Remove

module.exports = router