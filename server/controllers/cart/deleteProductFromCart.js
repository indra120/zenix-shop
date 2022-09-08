const Cart = require('../../models/Cart')

async function deleteProductFromCart(req, res) {
  try {
    await Cart.findByIdAndDelete(req.params.id)
    res.status(200).json('Cart has been deleted...')
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = deleteProductFromCart