const serverApp = require("./serverApp");
const serverMongoDb = require("./serverMongoDb");

async function runApp() {
  const clientMongoDb = await serverMongoDb.run();
  if (!clientMongoDb.topology.isConnected()) {
    await serverMongoDb.close();
    return;
  }

  const clientApp = await serverApp.run();
  if (!clientApp.listening) {
    await serverMongoDb.close();
    return;
  }
}

runApp();
