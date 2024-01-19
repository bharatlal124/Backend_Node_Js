const express = require('express')

// Create a server.

const server = express()

// Handle default request.

server.get('/', (req, res, next) => {
  console.log('first middleware hit')
  next()
})

// GET request

server.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain')
  res.send('Hello world! This is Express server')
})

server.post('/', (req, res) => {
  res.status(201).send('Post request received')
})

server.put('/', (req, res) => {
  res.send('Put request received')
})

server.delete('/', (req, res) => {
  res.send('Delete request received')
})

// Assign port
server.listen(3200, () => {
  console.log(`Server running at http://localhost:3200`)
})
