const  dbMongo = require("../appMongoDb");
const { ObjectId } = require("mongodb");

async function getPersons(params) {
  const dataBase = dbMongo.db("dbTest");
  const collectionPersons = dataBase.collection("persons");

  const query = {};
  const options = {};

  const persons = await collectionPersons.find(query, options).toArray();
  return persons;
}

async function postPerson(params) {
  const dataBase = dbMongo.db("dbTest");
  const collectionPersons = dataBase.collection("persons");

  const result = await collectionPersons.insertOne(params.body);
  return result;
}

async function getPersonById(params) {
  const dataBase = dbMongo.db("dbTest");
  const personsCollection = dataBase.collection("persons");

  const query = { _id: ObjectId(params.query.id) };
  const options = {};

  const person = await personsCollection.findOne(query, options);
  return person;
}

async function putPersonById(params) {
  const dataBase = dbMongo.db("dbTest");
  const personsCollection= dataBase.collection("persons");

  const query = { _id: ObjectId(params.query.id) };
  const options = { upsert: false };
  const updateDoc = { $set: params.body };

  const result = await personsCollection.updateOne(query, updateDoc, options);
  return result;

}

module.exports = { getPersons, postPerson, getPersonById, putPersonById };
