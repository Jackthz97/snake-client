const net = require("net");

const conn = net.createConnection({
  host: "165.227.47.243",
  port: "50541"
});

const connect = function() {

  //register a connect handler that prints out a message when connected
  conn.on("connect", ()=>{
    console.log("Successfully connected to game server");
    //displays name on the server after successfully connected
    conn.write("Name: Jak");
    // let timer = 0;

  //   setInterval(() => {
  //     conn.write('Move: up');
  //   }, 50);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = {connect, conn};