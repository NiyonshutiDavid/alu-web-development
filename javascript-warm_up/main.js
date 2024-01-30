#!/usr/bin/node
const { callMeMoby } = require('./call_me_moby');

callMeMoby(3, function () {
  console.log('C is fun');
});
