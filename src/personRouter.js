const router = require("express").Router();
const servicePerson = require("./personService");

router.route("/").get(async (req, res, next) => {
  const users = await servicePerson.getPersons();
  res.json(users);
});

router.route("/:id").get(async (req, res, next) => {
  const user = await servicePerson.getPersonById(req);
  res.json(user);
});

router.route("/").post(async (req, res, next) => {
  const user = await servicePerson.postPerson(req);
  res.json(user);
});

router.route("/:id").put(async (req, res, next) => {
  const user = await servicePerson.putPersonById(req);
  res.json(user);
});

module.exports = router;
