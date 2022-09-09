const Order = require('../../models/Order')

async function deleteOrder(req, res) {
  try {
    await Order.findByIdAndDelete(req.params.id)
    res.status(200).json('Order has been deleted...')
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = deleteOrder