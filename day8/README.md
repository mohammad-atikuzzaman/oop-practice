# Day 8: Abstraction in OOP

## What is Abstraction?

Abstraction is the concept of hiding complex implementation details and showing only the necessary features of an object. It helps manage complexity by hiding unnecessary details from the user.

## Key Concepts

### Abstract Classes

Abstract classes serve as templates that cannot be instantiated directly but must be extended by concrete classes.

```javascript
class Vehicle {
  constructor(brand) {
    if (this.constructor === Vehicle) {
      throw new Error("Cannot instantiate abstract class!");
    }
    this.brand = brand;
  }
  
  start() {
    throw new Error("Method 'start()' must be implemented.");
  }
  
  stop() {
    console.log(`${this.brand} is stopping...`);
  }
}
```

### Abstract Methods

Methods that must be implemented by child classes:

```javascript
start() {
  throw new Error("Method 'start()' must be implemented.");
}
```

### Implementation Example

```javascript
class Car extends Vehicle {
  start() {
    return `${this.brand} car is started`;
  }
}

class ElectricCar extends Vehicle {
  start() {
    console.log(`${this.brand} electric car is starting silently`);
  }
}

const car1 = new Car("Toyota");
const car2 = new ElectricCar("Tesla");
```

## Real-World Implementation: Payment System

```javascript
class Payment {
  constructor(amount) {
    if (this.constructor === Payment) {
      throw new Error("Abstract Class");
    }
    this.amount = amount;
  }

  pay() {
    throw new Error("Implement pay on your payment method");
  }
  
  mobileRecharge() {
    throw new Error("Implement mobile recharge system on your payment method");
  }
}

// Concrete implementations
class CreditCardPayment extends Payment {
  pay() {
    console.log(`Paid ${this.amount} using credit card`);
  }
  
  mobileRecharge() {
    console.log(`Recharged mobile with ${this.amount} using credit card`);
  }
}
```

## Benefits of Abstraction

1. **Reduces Complexity** - Hides implementation details
2. **Increases Security** - Restricts access to certain components
3. **Makes Code Maintainable** - Changes to implementation don't affect the interface
4. **Focuses on What, Not How** - Users only need to know what a function does, not how it works

## 📝 Practice Examples

Check the accompanying JavaScript files in this folder to see these concepts in action.