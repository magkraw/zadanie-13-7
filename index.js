var fs = require('fs');
var colors = require('colors');

fs.readdir('./texts', function (err, files) {
  files.forEach(function (file, index) {
    fs.appendFile('./contents.txt', file + '\n', function (err) {
      if (err) throw err;
      console.log('Appended!'.green);
    });
  });
});
