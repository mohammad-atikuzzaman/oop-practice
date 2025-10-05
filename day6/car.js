//1. Object Relationship –

// Association – “uses” relationship

/**
 * একটা class অন্য class-কে শুধু use করে, কিন্তু depend করে না।
 * একটা class অনেক সময় অন্য class-এর object ব্যবহার করে —
 * এই সম্পর্কই বলে association।
 */

class Driver {
  drive(car) {
    return `${this.name} is driving ${car.brand}`;
  }
  constructor(name) {
    this.name = name;
  }
}

class Car {
  constructor(brand) {
    this.brand = brand;
  }
}

const driver1 = new Driver("Atik");
const car1 = new Car("Toyota");

// console.log(car1);
// console.log(driver1.drive(car1));

// _________________________________________________________________________________________________

// Aggregation – “has-a” relationship

/**
 * একটা class অন্য class-এর instance কে নিজের মধ্যে রাখে,
 * কিন্তু ওরা আলাদা আলাদা exist করতে পারে।
 */

class Engine {
  constructor(assembler, origin) {
    this.assembler = assembler;
    this.origin = origin;
  }
  start() {
    return `${this.assembler}'s Engine is Started, Made in ${this.origin}`;
  }
}
class Radio {
  constructor(brand, range) {
    this.brand = brand;
    this.range = range;
  }
  play() {
    return `${this.brand} Radio is playing, it's range is ${this.range} km`;
  }
}

class Start {
  constructor(engine, radio) {
    this.engine = engine.start();
    this.radio = radio.play();
  }
}

class Truck {
  constructor(brand, model, engine, radio) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.radio = radio;
  }
  startTruck() {
    // return [this.engine.start(), this.radio.play()];
    return new Start(this.engine, this.radio);
  }
}

const engine = new Engine("Dongfing", "Origin");
const radio = new Radio("Sony", 10);

const truck = new Truck("Volvo", "Tn55df", engine, radio);

// console.log(truck);
// console.log(truck.startTruck());

// _______________________________________________________________________________________________

// Composition – “owns-a” relationship

/**
 * Composition হলো stronger relationship —
 * একটা object তৈরি হলে অন্য object তার ভিতরে তৈরি হয়,
 * এবং parent destroy হলে child ও destroy হয়।
 */

class BikeEngine {
  start() {
    return `Car Engine is started`;
  }
}

class Bike {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.engine = new BikeEngine();
  }
  startBike() {
    return {
      isStarted: this.engine.start(),
      isMoving: `${this.brand} $${this.model} is running so fast!`,
    };
  }
}

const bike1 = new Bike("Yamaha", "R 15")
console.log(bike1);
console.log(bike1.startBike());