const memory = require("./memory");
const dbMongo = require("./dbMongo");

async function getPerson(paramRequest) {
	const person = await dbMongo.getPerson(paramRequest);
	return person;
}

function postPerson(paramRequest) {
	const person = memory.postPerson(paramRequest);
	return person;
}

function getPersonById(paramRequest) {
	const person = memory.getPersonById(paramRequest);
	return person;
}

function putPersonById(paramRequest) {
	const person = memory.putPersonById(paramRequest);
	return person;	
}

module.exports = { getPerson, postPerson, getPersonById, putPersonById };