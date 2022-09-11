const stripe = require('stripe')(process.env.STRIPE_KEY)

function payment(req, res) {
  const { amount, tokenId } = req.body
  stripe.charges.create(
    {
      source: tokenId,
      amount,
      currency: 'usd',
    },
    (error, response) => {
      if (error) {
        res.status(500).json(error)
      } else {
        res.status(200).json(response)
      }
    }
  )
}

module.exports = payment