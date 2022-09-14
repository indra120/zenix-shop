import Order from '../../../src/models/Order'
import dbConnect from '../../../src/lib/dbConnect'
import admin from '../../../src/middlewares/admin'
import verifyToken from '../../../src/middlewares/verifyToken'

export default async function handler(req, res) {
  await dbConnect()

  switch (req.method) {
    case 'GET':
      admin(req, res, async () => {
        try {
          const orders = await Order.find()
          res.status(200).json(orders)
        } catch (error) {
          res.status(500).json(error)
        }
      })
      break
    case 'POST':
      verifyToken(req, res, async () => {
        try {
          const order = await new Order(req.body).save()
          res.status(200).json(order)
        } catch (error) {
          res.status(500).json(error)
        }
      })
  }
}