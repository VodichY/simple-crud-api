const router = require("./router");
const url = require("url");
const { StringDecoder } = require("string_decoder");

const readRequest = (req, res) => {
  const paramRequest = getParamRequest(req);
  const decoder = new StringDecoder("utf-8");
  let buffer = "";

  if (paramRequest.methodHasBody) {
    req.on("data", (chunk) => {
      buffer += decoder.write(chunk);
    });

    req.on("end", () => {
      buffer += decoder.end();

      paramRequest.body = buffer;
      routeHandler(paramRequest, res);
    });
  } else {
    routeHandler(paramRequest, res);
  }
};

function routeHandler(paramRequest, res) {
  switch (paramRequest.pathName) {
    case "getPerson":
      router.getPerson(paramRequest, res);
      break;
    case "getPersonById":
      router.getPersonById(paramRequest, res);
      break;
    case "postPerson":
      router.postPerson(paramRequest, res);
      break;
    case "putPersonById":
      router.putPersonById(paramRequest, res);
      break;
    case "deletePersonById":
      router.deletePersonById(paramRequest, res);
      break;
    default:
      router.badRequest(paramRequest, res);
      break;
  }
}

function getParamRequest(req) {
  const paramUrl = url.parse(req.url, true);

  const method = req.method.toUpperCase();
  const route = getRouteName(paramUrl.pathname);
  const query = paramUrl.query;
  const methodHasBody = isMethodHasBody(method);
  const pathName = getPathName(method, route);
  const body = "";

  const paramRequest = {
    route,
    method,
    query,
    methodHasBody,
    body,
    pathName,
  };

  return paramRequest;
}

function isMethodHasBody(method) {
  let methodHasBody = false;
  if (method === "POST") {
    methodHasBody = true;
  } else if (method === "PUT") {
    methodHasBody = true;
  } else if (method === "PATCH") {
    methodHasBody = true;
  } else if (method === "DELETE") {
    methodHasBody = true;
  } else {
    methodHasBody = false;
  }
  return methodHasBody;
}

function getRouteName(pathName) {
  const arrPathName = pathName.split("/").map((element) => {
    return element.charAt(0).toUpperCase() + element.slice(1);
  });
  return arrPathName.join("");
}

function getPathName(method, route) {
  const pathName = method.toLowerCase() + route;
  return pathName;
}

module.exports = { readRequest };
