const Order = require('../../models/Order')

async function updateOrder(req, res) {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    )
    res.status(200).json(updatedOrder)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = updateOrder