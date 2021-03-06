'use strict';

const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.addListener('newMail', function(subject) {
  console.log('Argument provided:', subject);

  console.log('notifying of new mail!');
});

eventEmitter.on('newMail', function() {
  console.log('Adding mail to list view');
});

eventEmitter.once('newMail', function() {
  console.log('I happen only once');
});

eventEmitter.emit('newMail');

eventEmitter.emit('newMail', 'Congratulations on progress');
