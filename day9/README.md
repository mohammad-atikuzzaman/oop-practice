# Day 9: Interfaces in JavaScript

## What are Interfaces?

In JavaScript, interfaces aren't built into the language like in Java or TypeScript, but we can simulate them. An interface defines a contract that classes must follow by implementing specific methods.

## Implementation Approaches

### System 1: Using a Helper Class

```javascript
class ImplementInterface {
  static ensureImplements(obj, methods) {
    for (let method of methods) {
      if (typeof obj[method] !== "function") {
        throw new Error(`Class must implement method: ${method}`);
      } else {
        return console.log("check pass");
      }
    }
  }
}
```

### System 2: Using a Function

```javascript
function Interface(obj, methods) {
  for (let method of methods) {
    if (typeof obj[method] !== "function") {
      throw new Error("Class must implement method");
    }
  }
}
```

## Example: Payment Processors

```javascript
class PayPal {
  connect() {
    console.log("Connected to PayPal");
  }
  pay(amount) {
    console.log(`Paid $${amount} via PayPal`);
  }
  disconnect() {
    console.log("Disconnected from PayPal");
  }
}

class Stripe {
  connect() {
    console.log("Connected to Stripe");
  }
  pay(amount) {
    console.log(`Paid $${amount} via Stripe`);
  }
  disconnect() {
    console.log("Disconnected from Stripe");
  }
}

// Interface check
ImplementInterface.ensureImplements(new PayPal(), [
  "connect",
  "pay",
  "disconnect"
]);
```

## Benefits of Using Interfaces

1. **Standardization** - Ensures all implementing classes follow the same structure
2. **Interchangeability** - Makes objects interchangeable if they implement the same interface
3. **Code Reliability** - Catches missing implementations early
4. **Better Design** - Encourages thinking about object contracts before implementation

## When to Use Interfaces

- When multiple classes need to implement the same behavior
- When you want to ensure consistency across different implementations
- When building systems where components need to be interchangeable

## 📝 Practice Examples

Check the accompanying JavaScript files in this folder to see these concepts in action.