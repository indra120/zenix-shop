const User = require('../../models/User')

async function getUser(req, res) {
  try {
    const user = await User.findById(req.params.id)
    const { password, ...others } = user._doc
    res.status(200).json(others)
  } catch (error) {
    res.status(500).json(err)
  }
}

module.exports = getUser