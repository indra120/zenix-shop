const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

async function signin(req, res) {
  const { username, password: inputtedPassword } = req.body

  try {
    const user = await User.findOne({ username })

    if (!user) {
      res.status(401).json(`User doesn't exist`)
    }

    const decryptedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_ENCRYPTION
    ).toString(CryptoJS.enc.Utf8)

    if (decryptedPassword != inputtedPassword) {
      res.status(401).json('Wrong Password')
    }

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '3d' }
    )

    const { password, ...others } = user._doc

    res.status(200).json({ ...others, accessToken })
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = signin