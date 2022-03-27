const model = require("./model");
const operationCommon = require("./operationCommon");

const DB = {
  person: [],
};

function getPerson(params) {
  const personsStringifyed = operationCommon.unParseData(DB.person);
  return personsStringifyed;
}

function postPerson(params) {
  const dataParsed = operationCommon.parseData(params.body);
  const person = new model.Person(dataParsed);
  DB.person.push(person);
  const personStringifyed = operationCommon.unParseData(person);
  return personStringifyed;
}

function getPersonById(params) {
  const person = DB.person.find((elem) => {
    if (params.query.id === elem.id) {
      return elem;
    }
  });
  const personStringifyed = operationCommon.unParseData(person);
  return personStringifyed;
}

function putPersonById(params) {
  const dataParsed = operationCommon.parseData(params.body);
  let indexPerson = DB.person.findIndex((elem) => {
    if (dataParsed.id === elem.id) {
      return elem;
    }
  });
  if (indexPerson !== -1) {
    DB.person[indexPerson] = dataParsed;
  }
  const personStringifyed = operationCommon.unParseData(dataParsed);
  return personStringifyed;
}

module.exports = { getPerson, postPerson, getPersonById, putPersonById };
