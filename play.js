const client = require('./client');
const setupInput = require('./input');

console.log("Connecting ...");
client.connect();
setupInput();