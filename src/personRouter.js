const router = require("express").Router();
const servicePerson = require("./personService");

router.route("/").get(async (req, res, next) => {
  const users = await servicePerson.getPersons();
  res.json(users);
});

module.exports = router;
