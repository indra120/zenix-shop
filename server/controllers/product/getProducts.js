const Product = require('../../models/Product')

async function getProducts(req, res) {
  const { recent = undefined, category = undefined } = req.query
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
}

module.exports = getProducts