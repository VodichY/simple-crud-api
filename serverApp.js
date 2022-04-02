const http = require("http");
const { configApp } = require("./src/config");
const requestHandler = require("./src/requestHandler");
const serverApp = http.createServer(requestHandler.readRequest);

async function run() {
  try {
    await serverApp.listen(configApp.PORT);
    console.log(`server is listening on ${configApp.PORT}`);
  } catch (err) {
    serverApp.close();
    console.error(err.message, err);
    console.log("server is closed");
  }
  return serverApp;
}

module.exports = { run };
