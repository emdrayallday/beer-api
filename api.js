require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const HTTPError = require('node-http-error')
const port = process.env.PORT || 4000
const { map } = require('ramda')
const { getBeer, getBrewery, allDocs } = require('./dal')

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

app.get('/beers', (req, res) => {
  allDocs(
    { include_docs: true, startkey: 'beer', endkey: 'beer\ufff0' },
    (err, beers, next) => {
      if (err) {
        next(new HTTPError(err.status, err.message, err))
        return
      }
      res.send(map(row => row.doc, beers.rows))
    }
  )
})

app.get('/breweries', (req, res) => {
  allDocs(
    { include_docs: true, startkey: 'brewery', endkey: 'brewery\ufff0' },
    (err, breweries, next) => {
      if (err) {
        next(new HTTPError(err.status, err.message, err))
        return
      }
      res.send(map(row => row.doc, breweries.rows))
    }
  )
})

app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.send(err.message)
})

app.listen(port, () => console.log('SUCCESS! You are on port: ', port))
