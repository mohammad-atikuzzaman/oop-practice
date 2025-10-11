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

// Bonus: PayPal service
class PayPalService extends PaymentService {
  pay(amount) {
    console.log(`💻 PayPal: Paid ${amount} USD`);
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

// --- Usage Example ---

// Injecting BkashService
const bkashPayment = new PaymentProcessor(new BkashService());
bkashPayment.processPayment(500);

// Injecting NagadService
const nagadPayment = new PaymentProcessor(new NagadService());
nagadPayment.processPayment(750);

// Injecting StripeService
const stripePayment = new PaymentProcessor(new StripeService());
stripePayment.processPayment(1200);

// Bonus: Injecting PayPalService without changing old code
const paypalPayment = new PaymentProcessor(new PayPalService());
paypalPayment.processPayment(50);
