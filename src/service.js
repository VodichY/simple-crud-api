const memory = require("./memory");

function getPerson(paramRequest) {
	const person = memory.getPerson(paramRequest);
	return person;
}

function postPerson(paramRequest) {
	const person = memory.postPerson(paramRequest);
	return person;
}

module.exports = { getPerson, postPerson };