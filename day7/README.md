# Day 7: Encapsulation (Data Protection in OOP)

## What Exactly Is Encapsulation?

Encapsulation means keeping data (properties) and behavior (methods) together in a "capsule," preventing direct access from outside.

**Real-life analogy:**
When you keep money in a bank, you can't open the vault and take money with your own hands; instead, you follow a specific process through a teller or ATM to withdraw it.

This system is encapsulation - keeping data secure, controlled, and predictable.

## In JavaScript Terms

Encapsulation is achieved when you:
- Use private variables
- Provide controlled access through getters/setters
- Enforce validation/rules through methods

## Why Do We Need Encapsulation?

### 1. Data Security
Prevents sensitive data (like passwords, balances) from being directly modified.

### 2. Validation
Allows you to prevent invalid data through setters or methods.

### 3. Maintainability
You can change the internal structure of a class without breaking outside code.

### 4. Code Consistency
All access is controlled from one place.

### 5. Real-world Modeling
Objects behave like real-world entities (e.g., ATM, User, Vehicle, etc.)

## Problem Without Encapsulation

```javascript
class Account {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
}

const a1 = new Account("Atik", 500);
a1.balance = -9999999; // ❌ Anyone can modify balance!
```

## Solution With Encapsulation

```javascript
class Account {
  #balance; // Private property (ES2020+)
  
  constructor(owner, initialBalance) {
    this.owner = owner;
    this.#balance = initialBalance;
  }
  
  getBalance() {
    return this.#balance;
  }
  
  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }
    this.#balance += amount;
    return this.#balance;
  }
  
  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be positive");
    }
    if (amount > this.#balance) {
      throw new Error("Insufficient funds");
    }
    this.#balance -= amount;
    return this.#balance;
  }
}

const account = new Account("Atik", 500);
account.deposit(200);
account.withdraw(100);
console.log(account.getBalance()); // 600
// account.#balance = -1000; // ❌ Error: Private field
```

## 📝 Practice Examples

Check the accompanying JavaScript files in this folder to see these concepts in action.