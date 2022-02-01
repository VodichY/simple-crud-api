const model = require("./model");
const operationCommon = require("./operationCommon");

const DB = {
  person: [],
};

function getPerson(params) {
  return JSON.stringify(DB.person);
}

function postPerson(params) {
  const dataParsed = operationCommon.parseData(params.body);
  const person = new model.Person(dataParsed);
  DB.person.push(person);
  const personStringifyed = operationCommon.unParseData(person);
  return personStringifyed;
}

module.exports = { getPerson, postPerson };
