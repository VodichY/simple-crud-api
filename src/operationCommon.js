function parseData(data) {
  let objData = {};

  try {
    objData = JSON.parse(data);
  } catch (error) {}

  return objData;
}

function unParseData(data) {
  let strData = "";

  if (!data) {
    return strData;
  }

  try {
    strData = JSON.stringify(data);
  } catch (error) {
    strData = "";
  }

  return strData;
}

module.exports = { parseData, unParseData };
