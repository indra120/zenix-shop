import Order from '../../../src/models/Order'
import dbConnect from '../../../src/lib/dbConnect'
import admin from '../../../src/middlewares/admin'
import authorization from '../../../src/middlewares/authorization'

export default async function handler(req, res) {
  await dbConnect()

  const { id } = req.query

  switch (req.method) {
    case 'GET':
      authorization(req, res, async () => {
        try {
          const orders = await Order.find({ userId: id })
          res.status(200).json(orders)
        } catch (error) {
          res.status(500).json(error)
        }
      })
      break
    case 'PUT':
      admin(req, res, async () => {
        try {
          const order = await Order.findByIdAndUpdate(
            id,
            {
              $set: req.body,
            },
            {
              new: true,
            }
          )
          res.status(200).json(order)
        } catch (error) {
          res.status(500).json(error)
        }
      })
      break
    case 'DELETE':
      admin(req, res, async () => {
        try {
          await Order.findByIdAndDelete(id)
          res.status(200).json('Order has been deleted...')
        } catch (error) {
          res.status(500).json(error)
        }
      })
  }
}