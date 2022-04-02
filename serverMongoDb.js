const { MongoClient } = require("mongodb");
const { configApp } = require("./src/config");

const clientMongoDb = new MongoClient(configApp.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await clientMongoDb.connect();
    console.log("Connected to DB successfully!");
  } catch (err) {
    clientMongoDb.close();
    console.error(err.message, err);
  }
  return clientMongoDb;
}

module.exports = { run };
