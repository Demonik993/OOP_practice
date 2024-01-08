'use strict';

//constuctor function
// const Person = function (firstName, birthDate) {
//   this.firstName = firstName;
//   this.birthDate = birthDate;
//   // never do this:!!
//   //   this.calcAge = function () {
//   //     console.log(new Date().getFullYear() - this.birthDate);
//   //   };
// };
// // 1. new {} is created
// // 2. function is called
// // 3.  {} is linked to prototype
// // 4.function automatically return {}
// const jan = new Person('Jan', 1939);
// const dom = new Person('Dom', 1993);
// const adam = new Person('Adam', 0);
// console.log(jan, dom, adam);
// const john = { name: 'John', surname: 'Smith' };
// // console.log(jan instanceof Person);

// //PROTOTYPE
// Person.prototype.calcAge = function () {
//   console.log(new Date().getFullYear() - this.birthDate);
// };
// adam.calcAge();
// jan.calcAge();
// dom.calcAge();

// console.log(jan.__proto__); // {calcAge: ƒ, constructor: ƒ}calcAge: ƒ ()constructor: ƒ (firstName, birthDate)[[Prototype]]: Object
// console.log(Person.prototype.isPrototypeOf(jan));
// console.log(Person.prototype.isPrototypeOf(adam));
// console.log(Person.prototype.isPrototypeOf(john));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo sapiens';
// console.log(jan.species); // Homo sapiens
// console.log(adam.hasOwnProperty('firstName')); // true
// console.log(adam.hasOwnProperty('species')); //false
// console.log(jan.__proto__.__proto__);
// const arr = [1, 2, 2, 3, 3, 4, 5];
// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique()); //(5) [1, 2, 3, 4, 5]
///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. 
The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the 
new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to 
the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on 
each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(this.name + ' going at ' + this.speed + ' km/h');
};
Car.prototype.break = function () {
  this.speed = this.speed - 5;
  console.log(this.name + ' going at ' + this.speed + ' km/h');
};

console.log(bmw);
console.log(mercedes);

bmw.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
bmw.break();
bmw.break();
bmw.break();
bmw.break();

console.log(bmw);
console.log(mercedes);
