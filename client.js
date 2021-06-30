const net = require("net");
const stdin = process.stdin
const { IP, PORT, NAME } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

    // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Surcessfully connected to the server.')
    conn.write(`Name: ${NAME}`)
    })
  
  // stdin.on('data', function (message) {
  //   setInterval(() => {conn.write(`Move: ${message}`)}, 500)})



  // stdin.on('data', function() {
  //   setTimeout(stdin.write('move: right', 2000))
  // })

  return conn;
};

module.exports = {
  connect
}
