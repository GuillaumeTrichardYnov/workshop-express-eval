//const app = '... please declare your Express web server here';
var express = require('express');
const app = express();
var fs = require('fs');
  var numbers
app.get('/bingo', function(req, res){
  fs.readFile("src/numbers.txt", "utf8",  function(e, data) {
    if (e) throw e;
    var temp = data.split("\n");
    temp.splice(-1,1)
    var result = temp.join(', ')
    res.end(result);
  })
})
module.exports = app;
