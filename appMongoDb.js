const { MongoClient } = require("mongodb");
const { MONGO_CONNECTION } = require("./src/config");

const dbMongo = new MongoClient(MONGO_CONNECTION, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
  });

  module.exports = dbMongo;