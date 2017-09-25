http = require("http");
var str = "";

http.get(process.argv[2], function callback(response) {
  response.on("data", function(data) {
    str += data + "\n";
  });
  response.on("end", function() {
    console.log(str);
  });
});
