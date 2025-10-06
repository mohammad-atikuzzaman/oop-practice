// Wrong way, there are no way to make protect of any data
// Without Encapsulation
class BankAccountUnsafe {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
}

const accU = new BankAccountUnsafe("Akash", 42535);
// console.log(accU.balance);

// Right way, Here we can protect any data with privet property
// With Encapsulation

class BankAccountSafe {
  #balance; // private field, if we use this privet field use "#" keyword we can't access the value directly from the object
  constructor(name, balance) {
    this.name = name;
    this.#balance = balance;
  }

  deposit(amount) {
    return amount <= 0
      ? "Please provide actual value"
      : (this.#balance += balance);
  }

  withdraw(amount) {
    return amount <= 0
      ? "Please provide actual value"
      : amount > this.#balance
      ? "Insufficient Balance"
      : (this.#balance -= amount);
  }

  getBalance() {
    return this.#balance;
  }
}

const accS = new BankAccountSafe("Akash", 182347);
console.log(accS);
console.log(accS.getBalance());
