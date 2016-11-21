'use strict'

const express = require('express')

const app = express()

//this route runs a piece of code that's already on the server
app.get('/', function (req, res) {
  res.writeHeader(200, {'Content-Type': 'application/json'})
  res.end(JSON.stringify({
    yo: 'I am a cool server'
  }))
})

app.listen(1337)