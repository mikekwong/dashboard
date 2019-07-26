const express = require('express')

const bodyParser = require('body-parser')

const routes = require('./routes')

const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use(bodyParser.json())
app.use('/', routes)

app.use((err, req, res, next) => {
  res.json(err)
})

module.exports = app
