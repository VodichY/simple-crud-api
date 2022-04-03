const serverApp = require("./serverApp");
const serverMongoDb = require("./serverMongoDb");

let clientMongoDb;
let clientApp;

async function runApp() {
  clientMongoDb = await serverMongoDb.run();
  if (!clientMongoDb.topology.isConnected()) {
    await serverMongoDb.close();
    return;
  }

  clientApp = await serverApp.run();
  if (!clientApp.listening) {
    await serverMongoDb.close();
    await serverApp.close();
	return;
  }
}

runApp();

module.exports = { clientApp, clientMongoDb };
