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
const car2 = new ElectricCar("Tesla")
console.log(car1);
console.log(car1.start());
