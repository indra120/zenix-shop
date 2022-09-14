import CryptoJS from 'crypto-js'
import User from '../../../src/models/User'
import admin from '../../../src/middlewares/admin'
import authorization from '../../../src/middlewares/authorization'
import dbConnect from '../../../src/lib/dbConnect'

export default async function handler(req, res) {
  await dbConnect()
  
  switch (req.method) {
    case 'GET':
      admin(req, res, async () => {
        try {
          const user = await User.findById(req.query.id)
          const { _id: id, username, email, isAdmin } = user._doc
          res.status(200).json({ id, username, email, isAdmin })
        } catch (error) {
          res.status(500).json(error)
        }
      })
      break
    case 'PUT':
      authorization(req, res, async () => {
        let { username, email, password } = req.body
        const { id } = req.query

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
              $set: {
                username,
                email,
                password,
              },
            },
            {
              new: true,
            }
          )

          res.status(200).json(updatedUser)
        } catch (error) {
          res.status(500).json(error)
        }
      })
      break
    case 'DELETE':
      authorization(req, res, async () => {
        try {
          await User.findByIdAndDelete(req.query.id)
          res.status(200).json('User has been deleted.')
        } catch (error) {
          res.status(500).json(error)
        }
      })
      break
  }
}
