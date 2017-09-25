http = require("http");
var str = "";
http.get(process.argv[2], function callback(response) {
  response.on("data", function(data) {
    str += data;
  });
  response.on("end", function() {
    console.log(str);
    str1="";
    return second(str1);
  });
});

function second(str1) {
  http.get(process.argv[3], function callback(response) {
    response.on("data", function(data) {
      str1 += data;
    });
    response.on("end", function() {
      console.log(str1);
      str2="";
      return third(str2);
    });
  });
}

function third() {
  http.get(process.argv[4], function callback(response) {
    response.on("data", function(data) {
      str2 += data;
    });
    response.on("end", function() {
      console.log(str2);
    });
  });
}
