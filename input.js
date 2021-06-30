let connection; // everything inside of conn

const handleUserInput = function (data) { //data is our keystroke
  if (data === '\u0003') {
    process.exit();
  } else if (data === 's') {
    connection.write(`Move: down`)
  } else if (data === 'a') {
    connection.write(`Move: left`)
  } else if (data === 'w') {
    connection.write(`Move: up`)
  } else if (data === 'd') {
    connection.write(`Move: right`)
  } else if (data === 'p') {
    connection.write(`Say: Thanks for the snacks chump`)
  } else if (data === 'o') {
    connection.write(`Say: I am unstoppable!`)
  }
};

const setupInput = function (conn /*con contains
  all files from "connect" in client.js */) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// establishes a connection with the game server



module.exports = {
  setupInput
}