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
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.make + ' going at ' + this.speed + ' km/h');
// };
// Car.prototype.break = function () {
//   this.speed -= 5;
//   console.log(this.make + ' going at ' + this.speed + ' km/h');
// };

// bmw.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// bmw.break();
// bmw.break();
// bmw.break();
// bmw.break();

//ES6 CLASSES

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //Methods added to .prototype!!
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }
  greet() {
    console.log(`Hello ${this.fullName}!`);
  }
  get age() {
    return new Date().getFullYear() - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert('We need full name!');
  }
  get fullName() {
    return this._fullName;
  }
  static hey() {
    console.log('Hello world ✋!');
  }
}
const john = new Person('Johnatan Adams', 1989);
// john.calcAge(); // 35
// john.greet();

// // 1. Classes are not Hoisted -- have to be first declared;
// // 2. Classes are first class citizens;
// // 3. Classes are executed in strict mode

// console.log(john.__proto__.__proto__);

// SETTERS & GETTERS
const account = {
  owner: 'Dom',
  movements: [100, 1000, -200, 200, -500, 100, 50],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);

account.latest = -200;
console.log(account.movements);
// line 109
console.log(john.age);
const adam = new Person('Adam Kowalksi', 1965);
console.log(adam.fullName);

Person.hey();

// OBJECT CREATE
const PersonProto = {
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const janusz = Object.create(PersonProto);
janusz.name = 'Janusz';
janusz.birthYear = 1954;
janusz.calcAge();
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1995);
console.log(sarah);
sarah.calcAge();
