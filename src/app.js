//const app = '... please declare your Express web server here';
var express = require('express');
const app = express();
var fs = require('fs');
var numbers;
function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }
    return true;
}
app.get('/bingo', function(req, res){
  fs.readFile("src/numbers.txt", "utf8",  function(e, data) {
    try {
      if (e) throw e;
      var validArray = data.split("\n");
      validArray.splice(-1,1)
      validArray = validArray.map(function(x){
        return parseInt(x);
      })
      var inputArray = req.query.mynumbers.split(",")
      inputArray = inputArray.map(function(x){
        if(isNaN(x))
        {
          res.end("Invalid numbers");
        }
        else {
          return parseInt(x);
        }
      })
      if(arraysEqual(validArray.sort(), inputArray.sort())){
        res.end("Bingo");
      }else {
        res.end("'The bingo game is already started, sorry your numbers doesn't match with known numbers 31, 10, 80, 44, 66 ; so you can not say Bingo'")
      }
    } catch (e) {
      res.sendStatus(500)
    }
  })
})
module.exports = app;
