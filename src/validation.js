const operationCommon = require("./operationCommon");

function checkSchemeBody(paramRequest) {
  if (!paramRequest.hasOwnProperty("body")) {
    return false;
  }

  const person = operationCommon.parseData(paramRequest.body);

  if (!person.hasOwnProperty("name")) {
    return false;
  }

  if (!person.hasOwnProperty("age")) {
    return false;
  }

  return true;
};

module.exports = { checkSchemeBody };
