const dbMongo = require("./dbMongo");

async function getPersons(paramRequest) {
	const person = await dbMongo.getPersons(paramRequest);
	return person;
}

async function postPerson(paramRequest) {
	const person = await dbMongo.postPerson(paramRequest);
	return person;
}

async function getPersonById(paramRequest) {
	const person = await dbMongo.getPersonById(paramRequest);
	return person;
}

async function putPersonById(paramRequest) {
	const person = await dbMongo.putPersonById(paramRequest);
	return person;	
}

module.exports = { getPersons, postPerson, getPersonById, putPersonById };