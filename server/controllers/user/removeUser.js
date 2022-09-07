const User = require('../../models/User')

async function removeUser(req, res) {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json('User has been deleted.')
  } catch (error) {
    res.status(500).json(err)
  }
}

module.exports = removeUser