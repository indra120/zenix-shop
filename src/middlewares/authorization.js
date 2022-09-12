import verifyToken from './verifyToken'

export default function authorization(req, res, next) {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next()
    } else {
      res.status(403).json('You are not allowed')
    }
  })
}