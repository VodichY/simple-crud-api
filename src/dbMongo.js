const { clientMongoDb } = require("../serverMongoDb");
const { ObjectId } = require("mongodb");
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

async function postPerson(params) {
  const dataParsed = operationCommon.parseData(params.body);

  const dataBase = clientMongoDb.db("dbTest");
  const persons = dataBase.collection("persons");

  const cursor = await persons.insertOne(dataParsed);
  const personStringifyed = operationCommon.unParseData(dataParsed);
  return personStringifyed;
}

async function getPersonById(params) {
  const dataBase = clientMongoDb.db("dbTest");
  const persons = dataBase.collection("persons");

  const query = { _id: ObjectId(params.query.id) };
  const options = {};

  const cursor = await persons.findOne(query, options);
  const personStringifyed = operationCommon.unParseData(cursor);
  return personStringifyed;
}

async function putPersonById(params) {
  const dataParsed = operationCommon.parseData(params.body);

  const dataBase = clientMongoDb.db("dbTest");
  const persons = dataBase.collection("persons");

  const query = { _id: ObjectId(dataParsed.id) };
  const options = { upsert: false };
  const updateDoc = { $set: dataParsed };

  const result = await persons.updateOne(query, updateDoc, options);
  const personStringifyed = operationCommon.unParseData(result);
  return personStringifyed;

}

module.exports = { getPerson, postPerson, getPersonById, putPersonById };
