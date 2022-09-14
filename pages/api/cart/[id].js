import Cart from '../../../src/models/Cart'
import dbConnect from '../../../src/lib/dbConnect'
import authorization from '../../../src/middlewares/authorization'

export default async function handler(req, res) {
  await dbConnect()

  const { id } = req.query

  switch (req.method) {
    case 'GET':
      authorization(req, res, async () => {
        try {
          const cart = await Cart.findOne({ userId: id })
          res.status(200).json(cart)
        } catch (error) {
          res.status(500).json(error)
        }
      })
      break
    case 'PUT':
      authorization(req, res, async () => {
        try {
          const cart = await Cart.findByIdAndUpdate(
            id,
            {
              $set: req.body,
            },
            { new: true }
          )
          res.status(200).json(cart)
        } catch (error) {
          res.status(500).json(error)
        }
      })
      break
    case 'DELETE':
      authorization(req, res, async () => {
        try {
          await Cart.findByIdAndDelete(id)
          res.status(200).json('Cart has been deleted...')
        } catch (error) {
          res.status(500).json(error)
        }
      })
  }
}