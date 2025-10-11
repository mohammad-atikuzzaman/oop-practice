# Day 10: Dependency Injection in OOP

## What is Dependency Injection?

Dependency Injection (DI) is a design pattern where a class receives its dependencies from external sources rather than creating them itself. This promotes loose coupling, easier testing, and more flexible code.

## Key Concepts

### 1. Dependency

A dependency is an object that another object requires to function.

### 2. Injection

The process of providing a dependency to an object that needs it.

### 3. Inversion of Control

The control of creating and managing dependencies is inverted (moved outside the dependent class).

## Example: Payment Processing System

```javascript
// Base PaymentService (Interface-like)
class PaymentService {
  pay(amount) {
    throw new Error("Method 'pay()' must be implemented");
  }
}

// Specific payment services
class BkashService extends PaymentService {
  pay(amount) {
    console.log(`📱 Bkash: Paid ${amount} BDT`);
  }
}

class NagadService extends PaymentService {
  pay(amount) {
    console.log(`📱 Nagad: Paid ${amount} BDT`);
  }
}

class StripeService extends PaymentService {
  pay(amount) {
    console.log(`💳 Stripe: Paid ${amount} BDT`);
  }
}

// PaymentProcessor class using Dependency Injection
class PaymentProcessor {
  constructor(paymentService) {
    this.paymentService = paymentService; // Dependency injected
  }

  processPayment(amount) {
    this.paymentService.pay(amount);
  }
}
```

## Usage Example

```javascript
// Injecting BkashService
const bkashPayment = new PaymentProcessor(new BkashService());
bkashPayment.processPayment(500);

// Injecting NagadService
const nagadPayment = new PaymentProcessor(new NagadService());
nagadPayment.processPayment(1000);

// Injecting StripeService
const stripePayment = new PaymentProcessor(new StripeService());
stripePayment.processPayment(2000);
```

## Benefits of Dependency Injection

1. **Loose Coupling** - Classes are not tightly bound to specific implementations
2. **Easier Testing** - Dependencies can be mocked or stubbed for testing
3. **Flexibility** - Implementations can be swapped without changing the dependent class
4. **Maintainability** - Code is more modular and easier to maintain
5. **Scalability** - New implementations can be added without modifying existing code

## 📝 Practice Examples

Check the accompanying JavaScript files in this folder to see these concepts in action.