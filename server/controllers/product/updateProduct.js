const Product = require('../../models/Product')

async function updateProduct(req, res) {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    )
    res.status(200).json(updatedProduct)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = updateProduct