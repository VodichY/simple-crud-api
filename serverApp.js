const { error } = require("console");
const http = require("http");
const { configApp } = require("./src/config");
const requestHandler = require("./src/requestHandler");
const serverApp = http.createServer(requestHandler.readRequest);

async function run() {
  try {
    await serverApp.listen(configApp.PORT);
    console.log(`server is listening on ${configApp.PORT}`);
  } catch (err) {
    console.error(err.message, err);
  }
  return serverApp;
}

async function close() {
  serverApp.close();
  console.log("Connection to SERVER is closed!");
}

module.exports = { run, close};
