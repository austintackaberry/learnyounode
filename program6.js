
var myModule = require('./module.js');
myModule(process.argv[2], process.argv[3], function (err, data) {
  if (err) {
    console.log('usage: directoryName ext');
  }
});
