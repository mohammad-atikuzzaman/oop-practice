// Wrong way, there are no way to make protect of any data

class BankAccountUnsafe {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
}

const accU = new BankAccountUnsafe("Akash", 42535);
console.log(accU.balance);
