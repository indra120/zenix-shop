const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoutes = require('./routes/auth')
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

app.listen(process.env.PORT, () => console.info('Server running successfully'))