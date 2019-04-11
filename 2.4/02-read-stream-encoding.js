'use strict';

const fs = require('fs');
const stream = fs.createReadStream('../README.MD');

stream.setEncoding('utf8');

stream.on('readable', function() {
  let chunk;

  while (null != (chunk = stream.read(20))) {
    console.log('Read from file:', chunk);
  }
});

stream.on('end', function() {
  console.log('Not reading anymore!');
});
