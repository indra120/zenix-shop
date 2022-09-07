const jwt = require('jsonwebtoken')

function verifyToken(req, res, next) {
  let { token } = req.headers

  if (token) {
    token = token.split(' ')[1]

    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
      if (error) res.status(403).json('Token is not valid')
      req.user = user
      next()
    })
  } else {
    res.status(401).json('You are not authorized!')
  }
}

module.exports = verifyToken