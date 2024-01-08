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
console.log(jan instanceof Person);
