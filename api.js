require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const HTTPError = require('node-http-error')
const port = process.env.PORT || 4000

const { getBeer } = require('./dal')

app.get('/beer/:id', (req, res) =>{
  // res.send('Howdy!')
  getBeer(req.params.id, function(err, beer) {
    if (err) {
      next(new HTTPError(err.status, err.message, err))
      return
    }
    res.send(beer)
  })
})

app.get('/beer/:id', (req, res) => {

  res.send('getting beer')
})

app.get('/breweries/:id', (req, res) =>{

  res.send(`you asked for ${req.params.id}`)
})







app.use(function(err, req, res, nex){
  res.status(err.status || 500)
  res.send(err.message)
})

app.listen(port, () => console.log('SUCCESS! You are on port: ', port))
