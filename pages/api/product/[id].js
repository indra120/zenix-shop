import Product from '../../../src/models/Product'
import dbConnect from '../../../src/lib/dbConnect'
import admin from '../../../src/middlewares/admin'

export default async function handler(req, res) {
  await dbConnect()

  switch (req.method) {
    case 'GET':
      try {
        const product = await Product.findById(req.query.id)
        res.status(200).json(product)
      } catch (error) {
        res.status(500).json(error)
      }
      break
    case 'PUT':
      admin(req, res, async () => {
        try {
          const product = await Product.findByIdAndUpdate(
            req.query.id,
            {
              $set: req.body,
            },
            {
              new: true,
            }
          )
          res.status(200).json(product)
        } catch (error) {
          res.status(500).json(error)
        }
      })
      break
    case 'DELETE':
      admin(req, res, async () => {
        try {
          await Product.findByIdAndDelete(req.query.id)
          res.status(200).json('Product has been deleted...')
        } catch (error) {
          res.status(500).json(error)
        }
      })
  }
}