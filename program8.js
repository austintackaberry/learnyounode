http = require("http");
var str = "";
var count = 0;
http.get(process.argv[2], function callback(response) {
  response.on("data", function(data) {
    str += data;
    count += data.length;
  });
  response.on("end", function() {
    console.log(count);
    console.log(str);
  });
});
