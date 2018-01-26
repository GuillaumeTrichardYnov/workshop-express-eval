let chalk = require('chalk');
var express = require('express');
//var app = express();
const app = require('./src/app');

// port
const port = app.listen(process.argv[2]);

app.listen(port);
// start server here
console.log(chalk.green('Hello web server'));
