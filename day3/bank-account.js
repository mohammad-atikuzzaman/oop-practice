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

const akashsAccount = new BankAccount("Akash", 80);

// console.log(akashsAccount.deposit(20));
// console.log(akashsAccount.withdraw(50));

const { deposit, withdraw } = akashsAccount;


// If we destructure the methods from object. we need to use .call() , and on the first parameter we have to use the object name, and others parameter

// console.log(deposit.call(akashsAccount, 20));
// console.log(withdraw.call(akashsAccount, 50));
