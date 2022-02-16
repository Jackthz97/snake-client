const net = require("net");
const stdin = process.stdin;

const name = "jack WORKING";

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541"
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.write("Name: Jak");
  conn.write('Move: Up');
  conn.write('Move: DOwn');
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

console.log("Connecting ...");
connect();