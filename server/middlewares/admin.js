const verifyToken = require('./verifyToken')

function admin(req, res, next) {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) next()
    else res.status(403).json('You are not allowed!')
  })
}

module.exports = admin