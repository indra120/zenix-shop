const CryptoJS = require('crypto-js')
const User = require('../../models/User')

async function editUser(req, res) {
  let { password } = req.body
  const { id } = req.params

  try {
    if (password) {
      password = CryptoJS.AES.encrypt(
        password,
        process.env.PASSWORD_ENCRYPTION
      ).toString()
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    )

    res.status(200).json(updatedUser)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = editUser