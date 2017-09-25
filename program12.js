var map = require('through2-map');
var http = require('http');

var server = http.createServer(function (inStream, outStream) {
  inStream.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(outStream);
});
server.listen(process.argv[2]);
