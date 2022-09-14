const Product = require('../../models/Product')

async function createProduct(req, res) {
  try {
    const newProduct = new Product(req.body)
    const savedProduct = await newProduct.save()
    res.status(200).json(savedProduct)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = createProduct