const Order = require('../../models/Order')

async function getAllOrder(req, res) {
  try {
    const orders = await Order.find()
    res.status(200).json(orders)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = getAllOrder