'use strict';

const fs = require('fs');
const stream = fs.createReadStream('../README.MD');

stream.pipe(process.stdout);
