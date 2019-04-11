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

app.get('/about', function(request, response) {
  response.send('About page');
});

app.get('/bo+o', function(request, response) {
  response.send('boo page');
});

app.get(/.*ula$/, function(request, response) {
  response.send('bla bal bla page');
});

app.get(
  '/skip',
  function(request, response, nexxt) {
    console.log('Will skip the rest');
    next('route');
  },
  function(request, response) {
    response.send('Never Called');
  }
);

app
  .route('/')
  .all(function(request, response, next) {
    console.log('Executed an all(' + request.method + ') methods');

    next();
  })
  .get(function(request, response) {
    response.send('Hello World');
  })
  .post(function(request, response) {
    response.send('Responding to Post method');
  });

app.listen(3000);
