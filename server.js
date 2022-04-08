const { PORT } = require("./src/config");
const app = require("./app");
const dbMongo = require("./appMongoDb");

dbMongo.connect();

dbMongo.on('error', console.error.bind(console, 'Connection error:'));
dbMongo.once('open', function() {
  console.log('Connected to DB successfully!');
  app.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  );
});