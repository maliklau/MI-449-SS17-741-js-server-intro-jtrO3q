// Require Node's http module and assign it to a variable
var http = require('http')
var randInt2

var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      '<h1>Welcome!!</h1>'
    )
  } else if (request.url === '/cuteness') {
    response.end(
      '<h1>Cute Animal!!</h1>' +
      '<img src="http://static.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals/cute-baby-animals-10.jpg" alt="cuteanimal">' + '<a href="/">home</a>'
    )
  } else if (request.url === '/random-joke') {
    randInt2 = parseInt(Math.random() * 100)
    if (randInt2 >= 25 && randInt2 < 50) {
      response.end('<h1>Random Joke</h1>' + '<p>Knock, Knock! <br> Who is there?</br> <br> no one this is not a door, but a website</br></p>' + '<a href="/">home</a>')
    } else if (randInt2 >= 0 && randInt2 < 25) {
      response.end('<h1>Random Joke</h1>' + '<p>Knock, Knock! <br> who is there? </br> <br>Lauren, asking Stuart nicely for a 4.0 :) please!</br></p>' + '<a href="/">home</a>'
        )
    } else if (randInt2 >= 50 && randInt2 < 75) {
      response.end('<h1>Random Joke</h1>' + '<p>Knock, knock! <br> who is there? </br> <br>the end of the semester, finally!</br></p>' + '<a href="/">home</a>')
    } else {
      response.end('<h1>Random Joke</h1>' + '<p>Knock, Knock! <br> who is there? </br> <br>hopefully nice weather</br></p>' + '<a href="/">home</a>')
    }
  } else {
    response.end('<h1>Page Not Found</h1>' + '<a href="/">home</a>' + '<p>requested page: ' + request.url + '</p>'
  )
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
