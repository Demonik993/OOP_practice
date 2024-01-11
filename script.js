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

// class Person {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   //Methods added to .prototype!!
//   calcAge() {
//     console.log(new Date().getFullYear() - this.birthYear);
//   }
//   greet() {
//     console.log(`Hello ${this.fullName}!`);
//   }
//   get age() {
//     return new Date().getFullYear() - this.birthYear;
//   }
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert('We need full name!');
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   static hey() {
//     console.log('Hello world ✋!');
//   }
// }

// const john = new Person('Johnatan Adams', 1989);
// // john.calcAge(); // 35
// john.greet();

// // 1. Classes are not Hoisted -- have to be first declared;
// // 2. Classes are first class citizens;
// // 3. Classes are executed in strict mode

// console.log(john.__proto__.__proto__);

// SETTERS & GETTERS
// const account = {
//   owner: 'Dom',
//   movements: [100, 1000, -200, 200, -500, 100, 50],
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// console.log(account.latest);

// account.latest = -200;
// console.log(account.movements);
// // line 109
// console.log(john.age);
// const adam = new Person('Adam Kowalksi', 1965);
// console.log(adam.fullName);

// Person.hey();

// // OBJECT CREATE
// const PersonProto = {
//   calcAge() {
//     console.log(new Date().getFullYear() - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const janusz = Object.create(PersonProto);
// janusz.name = 'Janusz';
// janusz.birthYear = 1954;
// janusz.calcAge();
// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1995);
// console.log(sarah);
// sarah.calcAge();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h 
before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(this.make + ' going at ' + this.speed + ' km/h');
//   }
//   break() {
//     this.speed -= 5;
//     console.log(this.make + ' going at ' + this.speed + ' km/h');
//   }
// }
// const bmw = new Car('BMW', 125);
// console.log(bmw);
// const ford = new Car('Ford', 120);
// console.log(ford.speedUS);
// ford.speedUS = 90;
// console.log(ford.speed);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.break();

// // Inheritance Between "Classes": Constructor Functions
// const Person = function (firstName, birthDate) {
//   this.firstName = firstName;
//   this.birthDate = birthDate;
// };
// Person.prototype.calcAge = function () {
//   console.log(new Date().getFullYear() - this.birthDate);
// };
// const Student = function (firstName, birthDate, course) {
//   Person.call(this, firstName, birthDate);
//   this.course = course;
// };
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.introduce = function () {
//   console.log(`Hello my name is ${this.firstName} and I study ${this.course}`);
// };
// const jacek = new Student('Jacek', 1990, 'Astronomia');
// console.log(jacek);
// jacek.calcAge();
// console.log(jacek.__proto__);
// Student.prototype.constructor = Student;
// console.log(jacek.__proto__.__proto__);
// jacek.introduce();
///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. 
Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery 
charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the 
charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 
'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT:
 Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

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

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// const tesla = new EV('Tesla', 120, 23);
// console.log(tesla.__proto__);
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     this.make +
//       ' going at ' +
//       this.speed +
//       ' km/h with a charge of ' +
//       this.charge +
//       '%'
//   );
// };
// console.log(tesla);
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.break();
// bmw.accelerate();
// tesla.chargeBattery(90);
// console.log(tesla);

// Inheritance of classes
//parent
// class Person {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   //Methods added to .prototype!!
//   calcAge() {
//     console.log(new Date().getFullYear() - this.birthYear);
//   }
//   greet() {
//     console.log(`Hello ${this.fullName}!`);
//   }
//   get age() {
//     return new Date().getFullYear() - this.birthYear;
//   }
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert('We need full name!');
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   static hey() {
//     console.log('Hello world ✋!');
//   }
// }
// //child
// class Student extends Person {
//   constructor(fullName, birthYear, course) {
//     // this comes always first:
//     super(fullName, birthYear); //arguments of parent constructor
//     this.course = course;
//   }
//   introduce() {
//     console.log(`Hi, I am ${this.fullName} and I study ${this.course}`);
//   }
//   calcAge() {
//     console.log(`I am ${this.age}, however I fill like ${this.age - 5}`);
//   }
// }
// const martha = new Student('Martha Jones', 2002, 'Computer science');
// martha.introduce();
// martha.fullName = 'Martha Jones Smith';
// console.log(martha.fullName);
// martha.calcAge();

// //inheritance Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(new Date().getFullYear() - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };
// const jay = Object.create(StudentProto);
// jay.init('Jay', 1986, 'Mathematics');
// console.log(jay);
// jay.calcAge();
// jay.introduce = function () {
//   console.log(`Hi, I am ${this.firstName} and I study ${this.course}`);
// };
// jay.introduce();

//Encapsulation: Protected Properties and Methods
// class Account {
//   // Public fields (instances)
//   locale = navigator.language;
//   //Private fields
//   #movements = [];
//   #pin;
//   constructor(name, currency, pin) {
//     this.name = name;
//     this.currency = currency;
//     // this.locale = navigator.language;
//     //protected property
//     this._pin = pin;
//     // this._movements = [];

//     console.log(`Hi, ${this.name}. Thank you for opening the account!`);
//   }
//   //Public methods
//   getMovements() {
//     return this.#movements;
//   }
//   deposit(val) {
//     this.#movements.push(val);
//     return this; // chaining methods
//   }
//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }
//   // only internal method for class
//   requestLoan(val) {
//     if (this.#approvedLoan(val)) {
//       this.deposit(val);
//     }
//     return this;
//   }
//   //private methods
//   #approvedLoan(val) {
//     return true;
//     return this;
//   }
// }
// const dom = new Account('Dominik', 'PLN', 1111);
// console.log(dom);
// dom.deposit(2000);
// dom.withdraw(200);
// dom.requestLoan(200);
// console.log(dom.getMovements());
// // console.log(dom.#approvedLoan(200));
// console.log(dom._pin);
// // console.log(dom.#movements);
// // console.log(dom.pin);
// dom.deposit(3000).withdraw(200).requestLoan(3000).withdraw(2000);
// console.log(dom.getMovements()); // Methods chaining

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 
'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, 
and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
class CarCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
  accelerate() {
    this.speed += 10;
    console.log(this.make + ' going at ' + this.speed + ' km/h');
    return this;
  }
  break() {
    this.speed -= 5;
    console.log(this.make + ' going at ' + this.speed + ' km/h');
    return this;
  }
}

class EVCl extends CarCL {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      this.make +
        ' going at ' +
        this.speed +
        ' km/h with a charge of ' +
        this.#charge +
        '%'
    );
    return this;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
}
const tesla = new EVCl('Tesla', 120, 23);
const rivian = new EVCl('Rivian', 120, 23);
// tesla.#charge = 30;
// tesla.speed = 130;
rivian
  .accelerate()
  .accelerate()
  .break()
  .break()
  .accelerate()
  .chargeBattery(90)
  .accelerate();
console.log(tesla);
console.log(rivian);
console.log(rivian.speedUS);
