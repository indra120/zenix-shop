import CryptoJS from 'crypto-js'
import jwt from 'jsonwebtoken'
import dbConnect from '../../../src/lib/dbConnect'
import User from '../../../src/models/User'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await dbConnect()

    const { username, email, password } = req.body

    try {
      const existingUser = await User.findOne({ username })

      if (existingUser) {
        const decryptedPassword = CryptoJS.AES.decrypt(
          existingUser.password,
          process.env.PASSWORD_ENCRYPTION
        ).toString(CryptoJS.enc.Utf8)

        if (decryptedPassword != password) {
          res.status(401).json({ error: 'User already exist, but the password is wrong!' })
          return
        }

        const accessToken = jwt.sign(
          {
            id: existingUser._id,
            isAdmin: existingUser.isAdmin,
            username: existingUser.username,
            email: existingUser.email,
          },
          process.env.JWT_SECRET_KEY,
          {
            expiresIn: '3d',
          }
        )
  
        res.status(200).json({ accessToken })
        return
      }

      const user = await new User({
        username,
        email,
        password: CryptoJS.AES.encrypt(
          password,
          process.env.PASSWORD_ENCRYPTION
        ).toString(),
      }).save()

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

      res.status(201).json({ accessToken })
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  }
}