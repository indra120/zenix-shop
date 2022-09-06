const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()

dotenv.config()

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.info('Connected to database'))
  .catch(error => console.error(error))

app.listen(process.env.PORT, () => console.info('Server running successfully'))