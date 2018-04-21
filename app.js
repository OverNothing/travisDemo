const http = require('http')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end('Hello World')
}).listen(8888)

console.log('Xudong\'s server is running')
