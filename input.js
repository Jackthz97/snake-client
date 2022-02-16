const {conn} = require('./client');
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
    conn.write('Move: up');
  }
  if (input === 's') {
    conn.write('Move: down');
  }
  if (input === 'a') {
    conn.write('Move: left');
  }
  if (input === 'd') {
    conn.write('Move: right');
  }
  if (input === 'p') {
    conn.write('Say: BRUUUH');
  }
  if (input === 'o') {
    conn.write('Say: MOVE OUT THE WAYYY');
  }
  if (input === 'i') {
    conn.write('Say: GET IN MY BELLY');
  }
  if (input === 'u') {
    conn.write('Say: YUMMM');
  }
  if (input === 'y') {
    conn.write('Say: I\'m hungry');
  }
};

module.exports = setupInput;