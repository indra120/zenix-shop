const Product = require('../../models/Product')

async function getProduct(req, res) {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = getProduct