class Vehicle {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  drive() {
    return `The ${this.brand} ${this.model} is running`;
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand, model);
  }
  drive() {
    return `The ${this.brand} ${this.model} is running on japans road`;
  }
}

class Bike extends Vehicle {
  constructor(brand, model) {
    super(brand, model);
  }
  drive() {
    return `The ${this.brand} ${this.model} is running on Bangladeshi road`;
  }
}

const car1 = new Car("Toyota", "Mx34");
// console.log(car1.drive());

Vehicle.prototype.Fuel = function (fuel) {
  return `${this.brand} ${this.model} works using ${fuel}`;
};
const bike1 = new Bike("Walton", "Gt4");
// console.log(bike1.Fuel("Petrol"));

const car2 = new Car("Tesla", "Cyber Truck")
console.log(car2.Fuel("Electricity"));
