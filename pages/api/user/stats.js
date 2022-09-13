import User from '../../../src/models/User'
import admin from '../../../src/middlewares/admin'
import dbConnect from '../../../src/lib/dbConnect'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    admin(req, res, async () => {
      await dbConnect()

      const date = new Date()
      const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

      try {
        const data = await User.aggregate([
          {
            $match: {
              createdAt: {
                $gte: lastYear,
              },
            },
          },
          {
            $project: {
              month: {
                $month: '$createdAt',
              },
            },
          },
          {
            $group: {
              _id: '$month',
              total: {
                $sum: 1,
              },
            },
          },
        ])

        res.status(200).json(data)
      } catch (error) {
        res.status(500).json(error)
      }
    })
  }
}