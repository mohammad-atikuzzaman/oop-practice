# Day 6: Relationships Between Classes in OOP

Creating relationships between classes is one of the most important aspects of OOP, especially in large projects where classes need to work together.

## Types of Relationships

### 1. Inheritance (Is-A Relationship)

When one class inherits properties or methods from another class.

**Example:** "Dog is an Animal" → Dog class inherits from Animal class

```javascript
class Animal {
  eat() {
    console.log("Eating...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog();
dog.eat(); // from Animal
dog.bark(); // from Dog
```

#### ✅ When to use:
- When there's an "is-a" relationship between two classes
- Examples: Car is a Vehicle, Teacher is a Person

#### 🚫 When not to use:
- When one class's behavior is completely different from the other
- Example: Driver and Car - a driver is not a car, but uses it

### 2. Composition (Has-A Relationship)

Composition means one class contains an instance of another class.

**Example:** "Car has an Engine" → Car class contains an instance of Engine class

```javascript
class Engine {
  start() {
    console.log("Engine started...");
  }
}

class Car {
  constructor(model) {
    this.model = model;
    this.engine = new Engine(); // composition
  }

  drive() {
    this.engine.start();
    console.log(`${this.model} is driving...`);
  }
}

const car = new Car("BMW");
car.drive();
```

#### ✅ When to use:
- When one class needs to use properties or methods of another class
- When two classes can exist independently

#### 🧠 Best Practice:
Composition is much more flexible than inheritance. Inheritance creates tight coupling (changing one class can cause problems in another).

### 3. Aggregation (Has-A Relationship but weaker)

Aggregation is a lighter version of composition where classes are loosely connected.

**Example:** "Library has Books" - If the library is deleted, the books still exist.

```javascript
class Book {
  constructor(title) {
    this.title = title;
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  
  addBook(book) {
    this.books.push(book);
  }
}

// Books can exist independently of the library
const book1 = new Book("JavaScript Basics");
const book2 = new Book("Advanced OOP");

const library = new Library("City Library");
library.addBook(book1);
library.addBook(book2);
```

## 📝 Practice Examples

Check the accompanying JavaScript files in this folder to see these concepts in action.