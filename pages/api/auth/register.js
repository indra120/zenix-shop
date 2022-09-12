import CryptoJS from 'crypto-js'
import dbConnect from '../../../src/lib/dbConnect'
import User from '../../../src/models/User'

export default async function register(req, res) {
  if (req.method === 'POST') {
    const { username, email, password } = req.body

    dbConnect()

    try {
      const user = new User({
        username,
        email,
        password: CryptoJS.AES.encrypt(
          password,
          process.env.PASSWORD_ENCRYPTION
        ).toString(),
      })

      const savedUser = await user.save()

      res.status(201).json(savedUser)
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  }
}