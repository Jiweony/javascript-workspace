//const person = {};

const person = new Object();
person.lastName = "0";
person.firstName = "il-nam";
person.age = "99";

person.getFullName = function () {
  return this.firstName + " " + this.lastName;
}

person.getFullName();