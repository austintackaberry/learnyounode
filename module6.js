var fs = require("fs");

module.exports = function(dirName, ext, callback) {
  fs.readdir(dirName, function read(err, list) {
    if (err) {
      return callback(err);
    }
    exercise = list;
    var result = [];
    for (var i = 0; i < exercise.length; i++) {
      let splitted = exercise[i].split(".");
      if (splitted[splitted.length-1] === ext && splitted.length > 1) {
        result.push(exercise[i]);
      }
    }
    callback(null,result);
    result = result.join("\n");
    console.log(result);
  });
}
