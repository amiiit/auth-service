// tests.webpack.js
var context = require.context('./src', true, /.+\.spec\.js?$/);

require('core-js/es5');

console.log('run this stuff for testing')

context.keys().forEach(context);
module.exports = context;
