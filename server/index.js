const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const productRoutes = require('./routes/product')
const cartRoutes = require('./routes/cart')
const orderRoutes = require('./routes/order')
const stripeRoutes = require('./routes/stripe')
const app = express()

dotenv.config()

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.info('Connected to database'))
  .catch(error => console.error(error))

app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/product', productRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/checkout', stripeRoutes)

app.listen(process.env.PORT, () => console.info('Server running successfully'))