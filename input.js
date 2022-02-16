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
  if (input === 'p') {
    client.conn.write('Say: BRUUUH');
  }
  if (input === 'o') {
    client.conn.write('Say: MOVE OUT THE WAYYY');
  }
  if (input === 'i') {
    client.conn.write('Say: GET IN MY BELLY');
  }
  if (input === 'u') {
    client.conn.write('Say: YUMMM');
  }
};

module.exports = setupInput;