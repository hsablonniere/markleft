var nodeStatic = require('node-static'),
    musicmetadata = require('musicmetadata'),
    fs = require('fs'),
    fileServer = new nodeStatic.Server('.'),
    port = 8080,
    musicDir = './music',
    musicExt = ['ogg', 'mp3'],
    urls = {
      direct: /^\/(public|music)/,
      browse: /^\/browse(.*)$/,
      metadatas: /^\/metadatas(.*)$/
    },
    browse,
    getMetadata;

// Takes a directory and creates an object with infos on it
browse = function (url, callback) {
  var dir = urls.browse.exec(url)[1];
  dir = decodeURIComponent(dir);

  fs.readdir(musicDir + dir, function (arr, files) {
    var fileInc = 0,
        fileIncStop = files.length,
        description = {
          dirs: [],
          tracks: []
        };

    files.sort();
    files.forEach(function (file) {
      fs.stat(musicDir + dir + file, function (err, stats) {
        fileInc += 1;

        if (stats.isDirectory()) {
          description.dirs.push({
            name: file,
            path: dir + file
          });
        }

        if (stats.isFile()) {
          var fileArray = file.split('.');
          var fileExt = fileArray.slice(-1).join('.');
          if (musicExt.indexOf(fileExt) !== -1) {
            description.tracks.push({
              name: fileArray.slice(0, -1).join('.'),
              path: musicDir.slice(1) + dir + file,
              metadatas: '/metadatas' + dir + file
            });
          }
        }

        if (fileInc === fileIncStop) {
          callback(description);
        }
      });
    });
  });
};

getMetadata = function (url, successCb, errorCb) {
  var dir = urls.metadatas.exec(url)[1];
  dir = decodeURIComponent(dir);

  fs.exists(musicDir + dir, function (exists) {
    if (exists) {
      var parser = new musicmetadata(fs.createReadStream(musicDir + dir));
      parser.on('metadata', function (result) {
        successCb(result);
      });
    } else {
      errorCb();
    }
  });
};

// Real and interesting code ;-)
require('http').createServer(function (request, response) {

  // On requests
  request.addListener('end', function () {
    // Direct file serve (music, css, js ... files)
    if (request.url.match(urls.direct)) {
      fileServer.serve(request, response);
    }

    // Details for a directory
    else if (request.url.match(urls.browse)) {
      browse(request.url, function (data) {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write(JSON.stringify(data));
        response.end();
      });
    }

    // Details for a music file (metadatas)
    else if (request.url.match(urls.metadatas)) {
      getMetadata(request.url, function (data) {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write(JSON.stringify(data));
        response.end();
      }, function () {
        response.writeHead(404);
        response.write('FILE NOT FOUND');
        response.end();
      });
    }

    // All other requests are supposed to display the main page
    else {
      fileServer.serveFile('/myokom.html', 200, {}, request, response);
    }
  });
}).listen(port);

// Useless ASCII art stuffs...
console.log([
  ' __  __ __   __ ___   _  __ ___   __  __',
  '|  \\\/  |\\ \\ \/ \/\/ _ \\ | |\/ \/\/ _ \\ |  \\\/  |',
  '| |\\\/| | \\ V \/| | | || \' \/| | | || |\\\/| |',
  '| |  | |  | | | |_| || . \\| |_| || |  | |',
  '|_|  |_|  |_|  \\___\/ |_|\\_\\\\___\/ |_|  |_|',
].join('\n'));
console.log('\nMYOKOM started at http://localhost:' + port + '\n');
