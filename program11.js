var http = require('http');
var fs = require("fs");

var server = http.createServer(function (req, res) {
  var str = "";
  var textFile = fs.createReadStream(process.argv[3]);
  textFile.on('data', (chunk) => {
    str += chunk;
  });

  textFile.on('end', () => {
    res.write(str);
    res.end();
  });
});
server.listen(process.argv[2]);
