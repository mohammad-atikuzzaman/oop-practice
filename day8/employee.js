class Employee {
  #salary;
  constructor(name, salary) {
    if (this.constructor === Employee) {
      throw new Error("Can't instantiate abstract class Employee");
    }
    this.#salary = salary;
    this.name = name;
  }
  get mySalary() {
    return this.#salary;
  }

  calculateBonus() {
    throw new Error("Method 'calculateBonus()' must be implemented.");
  }
   get showDetails() {
    return { name: this.name, salary: this.#salary };
  }
}

class Manager extends Employee {
  calculateBonus() {
    return this.mySalary * 0.2; // 20% bonus
  }
}

class Developer extends Employee {
  calculateBonus() {
    return this.mySalary * 0.1; // 10% bonus
  }
  totalSalaryWithBonus() {
    return this.mySalary + this.calculateBonus();
  }
}

const m1 = new Manager("Alvie", 20000);
const d1 = new Developer("Alex", 13000);

// console.log(m1);
// console.log(m1.showDetails());

console.log(d1);
console.log(d1.showDetails);
console.log(d1.calculateBonus());
console.log(d1.totalSalaryWithBonus());
