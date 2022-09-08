const Product = require('../../models/Product')

async function getProduct(req, res) {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = getProduct