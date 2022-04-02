const serverApp = require("./serverApp");
const serverMongoDb = require("./serverMongoDb");

let clientMongoDb;
let clientApp;

async function runApp() {
  clientMongoDb = await serverMongoDb.run();
  if (
    clientMongoDb &&
    clientMongoDb.topology &&
    clientMongoDb.topology.isConnected()
  ) {
    clientApp = await serverApp.run();
    if (!serverApp.listening) {
      clientMongoDb.close();
	  console.log("server mongo db is closed");
    }
  } else {
    clientMongoDb.close();
  }
}

runApp();

module.exports = { clientApp, clientMongoDb };
