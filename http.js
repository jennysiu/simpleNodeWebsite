// define dependencies
var http = require('http');
var url = require('url');
var fs = require('fs');

// create server instance
http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;

  // Check if no filename is provided and set default to index.html
  if (filename === './') {
    filename += 'index.html';
  }
  
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

// http://localhost:8080/
