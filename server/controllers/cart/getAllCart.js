const Cart = require('../../models/Cart')

async function getAllCart(req, res) {
  try {
    const carts = await Cart.find()
    res.status(200).json(carts)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = getAllCart