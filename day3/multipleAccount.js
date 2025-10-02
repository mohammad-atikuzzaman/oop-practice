class BankAccount {
  constructor(ownerName, balance) {
    this.ownerName = ownerName;
    this.balance = balance;
  }
  deposit(amount = 0) {
    return amount <= 0
      ? "Deposit amount must be positive"
      : (this.balance += amount);
  }
  withdraw(amount = 0) {
    return amount <= 0
      ? "Withdraw amount must be positive"
      : amount > this.balance
      ? "Inefficient balance"
      : (this.balance -= amount);
  }

  static totalBalance(accounts) {
    return accounts.reduce((sum, acc) => sum + acc.balance, 0);
  }
}

const akash = new BankAccount("Akash", 80);
const rina = new BankAccount("Rina", 300);
const salman = new BankAccount("Salman", 300);

rina.deposit(200);
salman.withdraw(100);

const accounts = [akash, rina, salman];
// When we user static keyword we can use entire class as object. and we can do multiple thing.
console.log(BankAccount.totalBalance(accounts));
