import Product from '../../../src/models/Product'
import dbConnect from '../../../src/lib/dbConnect'
import admin from '../../../src/middlewares/admin'

export default async function handler(req, res) {
  await dbConnect()

  switch (req.method) {
    case 'GET':
      const { new: recent = undefined, category = undefined } = req.query

      try {
        let products

        if (recent) {
          products = await Product.find().sort({ createdAt: -1 }).limit(1)
        } else if (category) {
          products = await Product.find({
            categories: {
              $in: [category],
            },
          })
        } else {
          products = await Product.find()
        }

        res.status(200).json(products)
      } catch (error) {
        res.status(500).json(error)
      }
      break
    case 'POST':
      admin(req, res, async () => {
        try {
          const product = await new Product(req.body).save()
          res.status(201).json(product)
        } catch (error) {
          res.status(500).json(error)
        }
      })
  }
}