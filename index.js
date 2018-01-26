let chalk = require('chalk');
var express = require('express');
//var app = express();
const app = require('./src/app');

// port
const port = 3000;
app.listen(port);
// start server here
console.log(chalk.green('Hello web server'));
