class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  // We will use this type of method on class constructor. Because this is easy to maintain the code and I has better readability.
  greet() {
    return `Hi, I am ${this.name}, and my contact info is ${this.email}`;
  }
}

// This type of method best when we user functional constructor. But this is so tough for managing code. Also we can use this on class constructor when we need to extend the object or we can't change the class

// User.prototype.greet = function () {
//   return `Hi, I am ${this.name}, and my contact info is ${this.email}`;
// };

const akash = new User("Akash", "akash203037@gmail.com");
// console.log(akash.greet());

// _________________________________________________________________________________________________

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getInfo() {
    return `${this.brand} ${this.model} ${this.year}`;
  }
}

const car1 = new Car("Toyota", "Corolla", 2022);

// We can destructure the object
const { brand, model, getInfo } = car1;

// If we destructure the method from the object we need to use .call(objectName) for bind the object. If we don't use .call() the object will not bind and it will gives error.

// console.log(getInfo.call(car1));

// ______________________________________________________________________________________________________

class Student {
  constructor(name, roll, marks) {
    this.name = name;
    this.roll = roll;
    this.marks = marks;
  }

  isPass() {
    return this.marks >= 33 ? "Pass" : "Fail";
  }
}

const student1 = new Student("Akash", 12, 88);
const student2 = new Student("Atik", 44, 32);
// console.log(student.isPass());

const { name, roll, isPass } = student2;
// console.log(isPass.call(student2));

// ___________________________________________________________________________________________________

class Calculator {
  add(a, b) {
    return a + b;
  }
  sub(a, b) {
    return a - b;
  }
  mul(a, b) {
    return a * b;
  }
  div(a, b) {
    return b === 0 ? "Math Error: You cant divide by 0": a/b
  }
}

const calc = new Calculator()
// console.log((calc.add(5, 4)));
console.log(calc.div(5,0));
