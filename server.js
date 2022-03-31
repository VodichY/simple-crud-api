const { app } = require("./app");
const { MongoClient }  = require("mongodb");
require('dotenv').config();

const clientDB = new MongoClient(process.env.MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

clientDB.connect((err) => {
	if (err) {
	  return console.error(err.message, err);
	}
	console.log("Connected to DB successfully!");
  
	app.listen(process.env.PORT, (err) => {
	  if (err) {
		clientDB.close();
		console.log("Disconnected from DB successfully!");  
		return console.error(err.message, err);
	  }
	  console.log(`server is listening on ${process.env.PORT}`);
	});
  });