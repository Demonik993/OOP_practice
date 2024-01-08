'use strict';

//constuctor function
const Person = function (firstName, birthDate) {
  this.firstName = firstName;
  this.birthDate = birthDate;
  // never do this:!!
  //   this.calcAge = function () {
  //     console.log(new Date().getFullYear() - this.birthDate);
  //   };
};
// 1. new {} is created
// 2. function is called
// 3.  {} is linked to prototype
// 4.function automatically return {}
const jan = new Person('Jan', 1939);
const dom = new Person('Dom', 1993);
const adam = new Person('Adam', 0);
console.log(jan, dom, adam);
const john = { name: 'John', surname: 'Smith' };
// console.log(jan instanceof Person);

//PROTOTYPE
Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthDate);
};
adam.calcAge();
jan.calcAge();
dom.calcAge();

console.log(jan.__proto__); // {calcAge: ƒ, constructor: ƒ}calcAge: ƒ ()constructor: ƒ (firstName, birthDate)[[Prototype]]: Object
console.log(Person.prototype.isPrototypeOf(jan));
console.log(Person.prototype.isPrototypeOf(adam));
console.log(Person.prototype.isPrototypeOf(john));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo sapiens';
console.log(jan.species); // Homo sapiens
console.log(adam.hasOwnProperty('firstName')); // true
console.log(adam.hasOwnProperty('species')); //false
