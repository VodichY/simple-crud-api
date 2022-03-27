const uuid = require("uuid");

class Person {
  constructor(person) {
    this.id = uuid.v1();
    this.name = person.name;
    this.age = person.age;
  }
}

module.exports = { Person };
