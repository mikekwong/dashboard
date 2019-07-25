const express = require('express')

const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use('/consumers', './routes/consumers')

app.use((err, req, res, next) => {
  res.json(err)
})

module.exports = app
