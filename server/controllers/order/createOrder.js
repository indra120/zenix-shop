const Order = require('../../models/Order')

async function createOrder(req, res) {
  try {
    const newOrder = new Order(req.body)
    const savedOrder = await newOrder.save()
    res.status(200).json(savedOrder)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = createOrder