const http = require("http");
const requestHandler = require("./src/requestHandler");
const port = 4000;

const server = http.createServer(requestHandler.readRequest);
server.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`server is listening on ${port}`);
});
