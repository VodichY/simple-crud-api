const validation = require("./validation");
const router = require("./router");

const readRequest = (request, response) => {
    console.log(request.url);
    response.end('smth!');
}

module.exports = { readRequest };