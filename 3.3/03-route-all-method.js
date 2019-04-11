'use strict';

const express = require('express');
const app = express();

app.all('/', function(request, response, next) {
  console.log('Executed an all(' + request.method + ') methods');

  next();
});

app.get('/', function(request, response) {
  response.send('Hello World');
});

app.post('/', function(request, response) {
  response.send('Response to POST method');
});

app.listen(3000);
