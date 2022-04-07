const express = require("express");
const appExpress = express();
appExpress.use(express.json());
const { configApp } = require("./src/config");

appExpress.get("/", (req, res) => {
  res.send("Hello World!");
});

appExpress.post("/Person", (req, res) => {
  res.send("Hello World!");
});

let clientApp;
async function run() {
   try {
    clientApp = await appExpress.listen(configApp.PORT);
    console.log(`server is listening on ${configApp.PORT}`);
  } catch (err) {
    clientApp = { listening: false};
    console.error(err.message, err);
  }
  return clientApp;
}

async function close() {
  await clientApp.close();
  console.log("Connection to SERVER is closed!");
}

module.exports = { run, close };
