//const app = '... please declare your Express web server here';
var express = require('express');
const app = express();
app.get('/bingo', function(req, res){
  res.end("Bingo")
})
module.exports = app;
