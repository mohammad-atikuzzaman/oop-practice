// Dependency Injection (Loose Coupling)

/**
 * যখন কোনো class অন্য class-এর উপর depend করে, তখন tightly coupled হয়।
 * এই coupling loosen করতে dependency বাইরে থেকে inject করা হয়।
 */

class Engine {
  constructor(origin, brand) {
    this.origin = origin;
    this.brand = brand;
    this.isRunning = false;
  }
  start() {
    this.isRunning = true;
    return `${this.brand} Engine from ${this.origin} is started`;
  }
  stop() {
    this.isRunning = false;
    return `${this.brand} Engine from ${this.origin} is stopped`;
  }
}

// wrong way (tight coupling)
class Car {
  constructor(brand, model, engineOrigin, engineBrand) {
    this.brand = brand;
    this.model = model;
    // this is wrong way (directly use of another object on a object)
    this.engine = new Engine(engineOrigin, engineBrand);
    this.features = ["AC", "Auto Pilot"];
  }
  startCar() {
    this.engine.start();
    return `${this.brand} ${this.model} is ruining`;
  }
  stopCar() {
    this.engine.stop();
    return `${this.brand} ${this.model} is ruining`;
  }
  addFeatures(feature) {
    this.features.push(feature);
  }
}

const car1 = new Car("Volvo", "TF41354 mt", "Japan", "DongDong");
// console.log(car1);
// console.log(car1.startCar());
// console.log(car1);
// console.log(car1.stopCar());
// console.log(car1.addFeatures("Bullet Proof"));
// console.log(car1);

// right way (louse coupling)

class Truck {
  constructor(brand, model, engine) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.features = ["AC", "Auto Pilot"];
  }
  startTruck() {
    return `
    ${this.engine.start()}
    ${this.brand} ${this.model} is ruining`;
  }
  stopTruck() {
    return `
    ${this.engine.stop()}
    ${this.brand} ${this.model} is ruining`;
  }
  addFeatures(feature) {
    this.features.push(feature);
    return `${feature} feature is added on the ${this.brand} ${this.model}`;
  }
}

const engine1 = new Engine("USA", "x1:0");
const truck1 = new Truck("Tesla", "Cyber Truck 1:0", engine1);

console.log(truck1);
console.log(truck1.startTruck());
console.log(truck1.addFeatures("Bullet Proof"));
console.log(truck1);
