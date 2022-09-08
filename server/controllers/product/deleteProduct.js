const Product = require('../../models/Product')

async function deleteProduct(req, res) {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.status(200).json('Product has been deleted...')
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = deleteProduct