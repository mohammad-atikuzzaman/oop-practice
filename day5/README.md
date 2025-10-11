# Day 5: Object Oriented Programming (OOP) in JavaScript

## 1. What is OOP?

Object Oriented Programming (OOP) is a powerful programming paradigm where code is organized into "objects."
Each object has its own data (properties) and behavior (methods).

```javascript
const car = {
  brand: "Toyota",
  color: "Black",
  start() {
    console.log(`${this.brand} is starting...`);
  }
};

car.start(); // Toyota is starting...
```

This car object contains both data (brand, color) and behavior (start method) - this is object-oriented thinking.

## 2. Why OOP?

There are four main reasons to use OOP:

1. **Code Reusability** - Reuse code instead of writing it repeatedly
2. **Easy Maintenance** - Manage large projects more easily
3. **Scalability** - Add new features with ease
4. **Clean Structure** - Each part has separate responsibilities

## 3. Four Pillars of OOP

OOP is built on four fundamental concepts:

### (a) Encapsulation - Data Protection

Encapsulation means keeping data and behavior together in a single unit, and preventing direct external access to that data.

```javascript
class BankAccount {
  #balance = 0; // private property

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(500);
console.log(acc.getBalance()); // 500
console.log(acc.#balance); // ❌ Error (private)
```

Here, the `#balance` property cannot be accessed from outside - that's encapsulation, protecting data.

### (b) Inheritance - Reuse Code Easily

Inheritance allows a class to use properties and methods from another class, helping with code reuse.

```javascript
class Animal {
  eat() {
    console.log("Eating...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Barking...");
  }
}

const dog = new Dog();
dog.eat(); // Eating...
dog.bark(); // Barking...
```

Here, the Dog class inherits properties/methods from the Animal class.

### (c) Polymorphism - One Method, Many Forms

Polymorphism means the same method name can perform different actions depending on the object.

```javascript
class Animal {
  makeSound() {
    console.log("Some generic sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow!");
  }
}

// Polymorphic behavior
const animals = [new Dog(), new Cat()];
animals.forEach(animal => animal.makeSound());
// Output:
// Woof!
// Meow!
```

### (d) Abstraction - Hide Complexity

Abstraction means hiding complex implementation details and showing only the necessary features.

```javascript
class SmartPhone {
  constructor(brand) {
    this.brand = brand;
  }
  
  makeCall(number) {
    // Complex internal process hidden
    this.#connectToNetwork();
    this.#routeCall();
    this.#establishConnection();
    
    console.log(`Calling ${number}...`);
  }
  
  #connectToNetwork() {
    // Complex implementation hidden
  }
  
  #routeCall() {
    // Complex implementation hidden
  }
  
  #establishConnection() {
    // Complex implementation hidden
  }
}

const phone = new SmartPhone("iPhone");
phone.makeCall("123-456-7890"); // Simple interface for a complex process
```

## 📝 Practice Examples

Check the accompanying JavaScript files in this folder to see these concepts in action.