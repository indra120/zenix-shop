const Cart = require('../../models/Cart')

async function updateCart(req, res) {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json(updatedCart)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = updateCart