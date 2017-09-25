var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
  var myUrl = url.parse(req.url, true);
  var date = new Date(myUrl.query.iso);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  if (myUrl.pathname === "/api/parsetime") {
    res.write(JSON.stringify({
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    }));
  }
  if (myUrl.pathname === "/api/unixtime") {
    res.write(JSON.stringify({
      "unixtime": date.getTime()
    }));
  }
  res.end();
});
server.listen(process.argv[2]);
