var http = require('http');
var server = net.createServer(function (socket) {

  var date = new Date();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var minute = date.getMinutes();
  if (month < 10) {
    month = "0" + month;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (day < 10) {
    day = "0" + day;
  }
  socket.write(date.getFullYear() + "-" + month + "-" + day + " " + date.getHours() + ":" + minute + "\n");
  socket.end();

});
server.listen(process.argv[2]);
