require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const HTTPError = require('node-http-error')
const port = process.env.PORT || 4000

const { getBeer, getBrewery } = require('./dal')

app.get('/beers/:id', (req, res) => {
  // res.send('Howdy!')
  getBeer(req.params.id, function(err, beer, next) {
    if (err) {
      next(new HTTPError(err.status, err.message, err))
      return
    }
    res.send(beer)
  })
})

app.get('/breweries/:id', (req, res) => {
  getBrewery(req.params.id, (err, brewery, next) => {
    if (err) {
      next(new HTTPError(err.status, err.message, err))
      return
    }
    res.send(brewery)
  })
})

app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.send(err.message)
})

app.listen(port, () => console.log('SUCCESS! You are on port: ', port))
