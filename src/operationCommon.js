function parseData(data) {
  let objData = {};

  try {
    objData = JSON.parse(data);
  } catch (error) {}

  return objData;
}

function unParseData(data) {
  let strData = "";
  try {
    strData = JSON.stringify(data);
  } catch (error) {}

  return strData;
}

module.exports = { parseData, unParseData };
