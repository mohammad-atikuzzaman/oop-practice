class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  drive() {
    return `${this.brand} is driving at ${this.speed} km/h`;
  }
}

class Car extends Vehicle {
  constructor(brand, speed, fuelType) {
    super(brand, speed);
    this.fuelType = fuelType;
  }
  drive() {
    return `${super.drive()}. It runs on ${this.fuelType}.`;
  }
  refuel() {
    return `${this.brand} is refueling with ${this.fuelType}`;
  }
}

class Bike extends Vehicle {
  constructor(brand, speed, helmetIncluded) {
    super(brand, speed);
    this.helmetIncluded = helmetIncluded;
  }

  drive() {
    return `${super.drive()}. Helmet included: ${
      this.helmetIncluded ? "Yes" : "No"
    }`;
  }
}


const tesla = new Car("Tesla", 120, "Electric");
const toyota = new Car("Toyota", 300, "Petrol")

// console.log(tesla.drive());   
console.log(toyota.drive());

const yamaha = new Bike("Yamaha", 80, true);
console.log(yamaha.drive());
