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
const car2 = new ElectricCar("Tesla");
// console.log(car1);
// console.log(car1.start());

// ===============================================================================================
//    Real word implementation
// ===============================================================================================

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
    throw new Error("Implement mobile recharge system on you payment method");
  }
  sendMoney() {
    return `${this.amount} is sending`;
  }
}

class BkashPay extends Payment {
  pay() {
    return `Paying ${this.amount} tk using Bkash`;
  }
  mobileRecharge() {
    return `${this.amount} of mobile recharge is sent to the operator`;
  }
}

class CashPay extends Payment {
  pay() {
    return `Paying ${this.amount} tk using cash`;
  }
  mobileRecharge() {
    return `Hey Shop keeper brother please give me ${this.amount} of mobile recharge`;
  }
}

class CardPay extends Payment {
  pay() {
    return `Paying ${this.amount} tk using Card`;
  }
}

const p1 = new BkashPay(200);
const p2 = new CashPay(200);
const p3 = new CardPay(200);

// console.log(p1, p2, p3);

[p1, p2, p3].forEach(i=> console.log(i.mobileRecharge()))