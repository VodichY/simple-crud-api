const { HTTP_STATUS_CODE } = require("./httpStatusCode");
const validation = require("./validation");
const service = require("./service");

function postPerson(paramRequest, res) {
  const isValidated = validation.checkSchemeBody(paramRequest);

  if (!isValidated) {
    const result = {
      body: "",
      statusCode: HTTP_STATUS_CODE.badRequest,
      contentLength: Buffer.byteLength(""),
      contentType: "text/plain",
    };
    sendResponse(res, result);
    return;
  }

  const person = service.postPerson(paramRequest);

  const result = {
    body: person,
    statusCode: HTTP_STATUS_CODE.created,
    contentLength: Buffer.byteLength(person),
    contentType: "text/json",
  };

  sendResponse(res, result);
}

function getPerson(paramRequest, res) {
  const person = service.getPerson(paramRequest);

  const result = {
    body: person,
    statusCode: HTTP_STATUS_CODE.OK,
    contentLength: Buffer.byteLength(person),
    contentType: "text/json",
  };

  sendResponse(res, result);
}

function getPersonById(paramRequest, res) {
  const person = service.getPersonById(paramRequest);

  if (!person) {
    const result = {
      body: person,
      statusCode: HTTP_STATUS_CODE.notFound,
      contentLength: Buffer.byteLength(person),
      contentType: "text/json",
    };
    sendResponse(res, result);
    return;
  }

  const result = {
    body: person,
    statusCode: HTTP_STATUS_CODE.OK,
    contentLength: Buffer.byteLength(person),
    contentType: "text/json",
  };

  sendResponse(res, result);
}

function sendResponse(res, result) {
  res
    .writeHead(result.statusCode, {
      "Content-Length": result.contentLength,
      "Content-Type": result.contentType,
    })
    .end(result.body);
}

module.exports = { postPerson, getPerson, sendResponse, getPersonById };
