const { clientMongoDb } = require("../serverMongoDb");
const operationCommon = require("./operationCommon");

async function getPerson(params) {
  const dataBase = clientMongoDb.db("dbTest");
  const persons = dataBase.collection("persons");

  const query = {};
  const options = {};

  const arrCursor = await persons.find(query, options).toArray();
  
  const personsStringifyed = operationCommon.unParseData(arrCursor);
  return personsStringifyed;
}

module.exports = { getPerson };