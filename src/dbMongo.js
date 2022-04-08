const  dbMongo = require("../appMongoDb");
const { ObjectId } = require("mongodb");
const operationCommon = require("./operationCommon");

async function getPersons(params) {
  const dataBase = dbMongo.db("dbTest");
  const collectionPersons = dataBase.collection("persons");

  const query = {};
  const options = {};

  const persons = await collectionPersons.find(query, options).toArray();
  return persons;
}

async function postPerson(params) {
  const dataParsed = operationCommon.parseData(params.body);

  const dataBase = dbMongo.db("dbTest");
  const persons = dataBase.collection("persons");

  const cursor = await persons.insertOne(dataParsed);
  const personStringifyed = operationCommon.unParseData(dataParsed);
  return personStringifyed;
}

async function getPersonById(params) {
  const dataBase = dbMongo.db("dbTest");
  const persons = dataBase.collection("persons");

  const query = { _id: ObjectId(params.query.id) };
  const options = {};

  const cursor = await persons.findOne(query, options);
  const personStringifyed = operationCommon.unParseData(cursor);
  return personStringifyed;
}

async function putPersonById(params) {
  const dataParsed = operationCommon.parseData(params.body);

  const dataBase = dbMongo.db("dbTest");
  const persons = dataBase.collection("persons");

  const query = { _id: ObjectId(dataParsed.id) };
  const options = { upsert: false };
  const updateDoc = { $set: dataParsed };

  const result = await persons.updateOne(query, updateDoc, options);
  const personStringifyed = operationCommon.unParseData(result);
  return personStringifyed;

}

module.exports = { getPersons, postPerson, getPersonById, putPersonById };
