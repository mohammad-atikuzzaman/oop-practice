class BankAccount {
  constructor(ownerName, balance) {
    this.ownerName = ownerName;
    this.balance = balance;
  }
  deposit(amount = 0) {
    return amount <= 0 ? "Please provide real value" : (this.balance += amount);
  }
  withdraw(amount =0) {
    return amount <= 0
      ? "Please provide real value"
      : amount > this.balance
      ? "Inefficient balance"
      : (this.balance -= amount);
  }
}

class SavingsAccount extends BankAccount {
  constructor(ownerName, balance, interestRate = 5) {
    super(ownerName, balance);
    this.interestRate = interestRate;
  }

  addInterest() {
    const interest = (this.balance * this.interestRate) / 100;
    return (this.balance += interest);
  }

  withdraw(amount =0) {
    return amount <= 0
      ? "Please provide real value"
      : amount > this.balance * 0.9
      ? "Inefficient balance : You can withdraw maximum 90% of you balance"
      : (this.balance -= amount);
  }
}

const savings = new SavingsAccount("Atik", 1000, 10);
savings.deposit(200);
savings.addInterest();

console.log(savings.withdraw(1188));
console.log(savings);


