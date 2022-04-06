const memory = require("./memory");
const dbMongo = require("./dbMongo");

async function getPerson(paramRequest) {
	const person = await dbMongo.getPerson(paramRequest);
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

module.exports = { getPerson, postPerson, getPersonById, putPersonById };