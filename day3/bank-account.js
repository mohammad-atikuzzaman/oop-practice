class BankAccount {
  constructor(ownerName, balance) {
    this.ownerName = ownerName;
    this.balance = balance;
  }
  deposit(amount = 0) {
    return this.balance + amount;
  }

  withdraw(amount = 0) {
    return this.balance - amount;
  }
}

const akashsAccount = new BankAccount("Akash", 80)
console.log(akashsAccount.deposit(20));
console.log(akashsAccount.withdraw(50));
