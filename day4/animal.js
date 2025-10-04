class Animal {
  constructor(name) {
    this.name = name;
  }
  sound() {
    return `${this.name} makes a sound`;
  }
}

// const animal1 = new Animal("Dog");
// console.log(animal1);

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  sound() {
    return `${this.breed} breeds of Dog ${this.name} barks: Woof`;
  }
}

const dog1 = new Dog("Tommy", "German");
// console.log(dog1);
// console.log(dog1.sound());

class Cat extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  sound() {
    return `${this.breed} breeds of Cat ${this.name} barks: Meow`;
  }
}

const cat1 = new Cat("Tom", "Persian");
// console.log(cat1);
// console.log(cat1.sound());

class Mouse extends Animal {
  constructor(name) {
    super(name);
  }
  sound() {
    return `${this.name} barks: chick`;
  }
}

const mouse1  = new Mouse("Jerry")
console.log(mouse1);
console.log(mouse1.sound());