// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server that just says "Hi!!" at every route
var server = http.createServer(function (request, response) {
  response.end('Hello, there!!')
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
