const net = require("net");
const client = require('./client');
const stdin = process.stdin;
stdin.setEncoding('utf8');

const setupInput = function() {
  // const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(input) {
  if (input === '\u0003') {
    process.exit();
  }
  if (input === 'w') {
    client.conn.write('Move: up');
  }
  if (input === 's') {
    client.conn.write('Move: down');
  }
  if (input === 'a') {
    client.conn.write('Move: left');
  }
  if (input === 'd') {
    client.conn.write('Move: right');
  }
};

console.log("Connecting ...");
client.connect();
setupInput();