const Cart = require('../../models/Cart')

async function addToCart(req, res) {
  try {
    const newCart = new Cart(req.body)
    const savedCart = await newCart.save()
    res.status(200).json(savedCart)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = addToCart