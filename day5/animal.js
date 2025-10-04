class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `Some generic animal sound`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    return `${this.name} barks: Woof!`;
  }
}
class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    return `${this.name} barks: Meow`;
  }
}

const animals = [
  new Dog("Tommy"),
  new Cat("Tom"),
  new Dog("Matt"),
  new Dog("Harry"),
  new Cat("Paul"),
];

animals.forEach((animal) => console.log(animal.speak()));
