# Day 4: Inheritance & Composition in JavaScript OOP

## 1. Inheritance (উত্তরাধিকার)

Inheritance is a powerful OOP concept where a class (Child) inherits properties and methods from another class (Parent).

**Simply put:**
- When we can say "Dog is an Animal" → This is inheritance
- Child class can override parent behavior or add new behaviors

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  sound() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  sound() {
    return `${this.name} barks: Woof!`;
  }
}

const dog = new Dog("Tommy");
console.log(dog.sound()); // Tommy barks: Woof!
```

✅ Here, Dog is a specialized form of Animal.

## 2. The `super` Keyword

The `super` keyword is used to:
- Call the parent's constructor
- Access the parent's methods

```javascript
class Parent {
  greet() {
    return "Hello from Parent";
  }
}

class Child extends Parent {
  greet() {
    return super.greet() + " and Hello from Child";
  }
}

const child = new Child();
console.log(child.greet());
// Hello from Parent and Hello from Child
```

## 3. Composition (has-a relationship)

Alongside inheritance, composition is also very important in OOP.
In composition, one class contains objects of other classes.

**Simply put:**
- When we can say "Car has an Engine" → This is composition

```javascript
class Engine {
  start() {
    return "Engine started!";
  }
}

class Car {
  constructor(brand) {
    this.brand = brand;
    this.engine = new Engine(); // has-a relationship
  }
  drive() {
    return `${this.brand} is driving. ${this.engine.start()}`;
  }
}

const car = new Car("BMW");
console.log(car.drive());
// BMW is driving. Engine started!
```

## 4. Inheritance vs Composition

| Aspect | Inheritance (is-a) | Composition (has-a) |
|--------|-------------------|---------------------|
| Relationship | Child is a Parent | One class has another class |
| Example | Dog is an Animal | Car has an Engine |
| Code Reuse | Gets all methods from parent | Must inject and use other objects |
| Flexibility | Less (can extend only one parent) | More (can use multiple objects) |
| When to use | When child is truly a specialized type of parent | When child only needs to use features of another class |

## 5. Benefits of Inheritance

- **Code Reusability** → Code written once can be reused multiple times
- **Extensibility** → New features can be easily added

## 📝 Practice Examples

Check the accompanying JavaScript files in this folder to see these concepts in action.