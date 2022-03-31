const http = require("http");
const requestHandler = require("./src/requestHandler");
const app = http.createServer(requestHandler.readRequest);

module.exports = { app };
