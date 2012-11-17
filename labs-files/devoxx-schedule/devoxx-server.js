var nodeStatic = require('node-static'),
    fileServer = new nodeStatic.Server('public'),
    port = 8080;

// Real and interesting code ;-)
require('http').createServer(function (request, response) {
  // On requests
  request.addListener('end', function () {
    // Direct file serve (music, css, js ... files)

    if (request.url === '/devoxx-schedule.json') {
      setTimeout(function () {
        fileServer.serve(request, response);
      }, 1000);
    } else {
      fileServer.serve(request, response);
    }
  });
}).listen(port);

console.log('Devoxx Server started at http://localhost:' + port + '\n');
