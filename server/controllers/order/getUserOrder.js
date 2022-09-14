const Order = require('../../models/Order')

async function getUserOrder(req, res) {
  try {
    const orders = await Order.find({ userId: req.params.userId })
    res.status(200).json(orders)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = getUserOrder