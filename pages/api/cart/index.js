import Cart from '../../../src/models/Cart'
import dbConnect from '../../../src/lib/dbConnect'
import admin from '../../../src/middlewares/admin'
import verifyToken from '../../../src/middlewares/verifyToken'

export default async function handler(req, res) {
  await dbConnect()

  switch (req.method) {
    case 'GET':
      admin(req, res, async () => {
        try {
          const carts = await Cart.find()
          res.status(200).json(carts)
        } catch (error) {
          res.status(500).json(error)
        }
      })
      break
    case 'POST':
      verifyToken(req, res, async () => {
        try {
          const cart = await new Cart(req.body).save()
          res.status(200).json(cart)
        } catch (error) {
          res.status(500).json(error)
        }
      })
  }
}