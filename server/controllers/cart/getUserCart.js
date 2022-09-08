const Cart = require('../../models/Cart')

async function getUserCart(req, res) {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId })
    res.status(200).json(cart)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = getUserCart