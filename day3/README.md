# Day 3: OOP in JavaScript (Class, Object, Method, Static)

## 1. Class & Object

- **Class**: A blueprint or design (like a car design)
- **Object**: A real instance created from that blueprint (like a specific car)

```javascript
class BankAccount {
  constructor(ownerName, balance = 0) {
    this.ownerName = ownerName;
    this.balance = balance;
  }
}

const akash = new BankAccount("Akash", 100);
const rina = new BankAccount("Rina", 200);
```

## 2. Constructor

- A special method that's automatically called when creating an object
- Used to set the initial state (property values) of the object
- **Best practice**: Set default values in the constructor to reduce errors from incorrect input

## 3. Instance Methods

- Methods defined inside a class that work with the object's data
- Called "instance methods" because they operate on specific instances

```javascript
deposit(amount) {
  this.balance += amount;  // Updates the instance property
}
```

- Here, `this` refers to the current object

## 4. `this` Behavior

- `this` always refers to the current object
- When a method is destructured, `this` loses its reference
- To fix this, use `.call()`, `.apply()`, or `.bind()` to explicitly set `this`

```javascript
const { deposit } = akash;
deposit(50); // ❌ `this` is lost
deposit.call(akash, 50); // ✅ Works correctly
```

## 5. State Update vs Return Value

- Simply returning a value doesn't change the object's internal state
- To update the object's state, you must modify `this.property`

**Wrong approach:**
```javascript
deposit(amount) {
  return this.balance + amount; // Only calculates, doesn't update
}
```

**Correct approach:**
```javascript
deposit(amount) {
  this.balance += amount; // Updates the state
}
```

## 6. Validation (Best Practice)

Always add validation to your methods:
- Reject negative deposits
- Check if there's sufficient balance before withdrawals

```javascript
withdraw(amount) {
  if (amount > this.balance) {
    console.log("❌ Insufficient balance!");
    return;
  }
  this.balance -= amount;
}
```

## 7. Static Methods

- Static methods belong to the class, not to objects
- Can be accessed using the class name without creating an object
- **Use case**: When the responsibility belongs to the class as a whole, not to individual objects

```javascript
class BankAccount {
  // Instance methods...
  
  // Static method
  static getBankInfo() {
    return "This is a bank account class";
  }
}

// Call without creating an object
console.log(BankAccount.getBankInfo());
```

## 📝 Practice Examples

Check the accompanying JavaScript files in this folder to see these concepts in action.