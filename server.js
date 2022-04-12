const { PORT } = require("./src/config");
const appExpress = require("./appExpress");
const dbMongo = require("./appMongoDb");

dbMongo.connect();

dbMongo.on('error', console.error.bind(console, 'Connection error:'));
dbMongo.once('open', function() {
  console.log('Connected to DB successfully!');
  appExpress.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  );
});