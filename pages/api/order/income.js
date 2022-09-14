import Order from '../../../src/models/Order'
import dbConnect from '../../../src/lib/dbConnect'
import admin from '../../../src/middlewares/admin'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    admin(req, res, async () => {
      await dbConnect()

      const date = new Date()
      const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
      const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))

      try {
        const income = await Order.aggregate([
          {
            $match: {
              createdAt: {
                $gte: previousMonth,
              },
            },
          },
          {
            $project: {
              month: {
                $month: '$createdAt',
              },
              sales: '$amount',
            },
          },
          {
            $group: {
              _id: '$month',
              total: {
                $sum: '$sales',
              },
            },
          },
        ])

        res.status(200).json(income)
      } catch (error) {
        res.status(500).json(error)
      }
    })
  }
}