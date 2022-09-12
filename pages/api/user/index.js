import User from '../../../src/models/User'
import admin from '../../../src/middlewares/admin'
import dbConnect from '../../../src/lib/dbConnect'

export default async function getUsers(req, res) {
  if (req.method === 'GET') {
    admin(req, res, async () => {
      await dbConnect()

      const query = req.query.new

      try {
        let users = query
          ? await User.find().sort({ _id: -1 }).limit(5)
          : await User.find()

        users = users.map(({ _id: id, username, email, isAdmin }) => ({
          id,
          username,
          email,
          isAdmin,
        }))

        res.status(200).json(users)
      } catch (error) {
        res.status(500).json(error)
      }
    })
  }
}