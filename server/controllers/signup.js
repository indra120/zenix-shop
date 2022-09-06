const CryptoJS = require('crypto-js')
const User = require('../models/User')

async function signup(req, res) {
  const { username, email, password } = req.body

  try {
    const newUser = new User({
      username,
      email,
      password: CryptoJS.AES.encrypt(
        password,
        process.env.PASSWORD_ENCRYPTION
      ).toString(),
    })

    const user = await newUser.save()

    res.status(201).json(user)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = signup