import CryptoJS from 'crypto-js'
import jwt from 'jsonwebtoken'
import dbConnect from '../../../src/lib/dbConnect'
import User from '../../../src/models/User'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await dbConnect()

    const { username, password } = req.body

    try {
      const user = await User.findOne({ username })

      if (!user) {
        res.status(404).json(`User doesn't exist!`)
        return
      }

      const decryptedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASSWORD_ENCRYPTION
      ).toString(CryptoJS.enc.Utf8)

      if (decryptedPassword != password) {
        res.status(401).json('Wrong Password!')
        return
      }

      const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
          username: user.username,
          email: user.email,
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: '3d',
        }
      )

      res.status(200).json({ accessToken })
    } catch (error) {
      res.status(500).json(error)
    }
  }
}