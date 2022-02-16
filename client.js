const net = require("net");
const {IP, PORT} = require('./constants');

const conn = net.createConnection({
  host: IP,
  port: PORT
});

const connect = function() {

  //register a connect handler that prints out a message when connected
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    //displays name on the server after successfully connected
    conn.write("Name: Jak");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = {connect, conn};