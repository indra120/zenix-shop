const Product = require('../../models/Product')

async function deleteProduct(req, res) {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.status(200).json('Product has been deleted...')
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = deleteProduct