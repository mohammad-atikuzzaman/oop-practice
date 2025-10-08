// interface simulation utility
class ImplementInterface {
  static interface(obj, methods) {
    for (let method of methods) {
      if (typeof obj[method] !== "function") {
        throw new Error(`Class must implement method: ${method}`);
      }
    }
  }
}

// payment abstract class
class Payment {
  constructor(amount) {
    if (this.constructor === Payment) {
      throw new Error("Cannot instantiate abstract class!");
    }
    this.amount = amount;
  }
  process() {
    throw new Error(`Method process() must be implemented`);
  }
}

// notification abstract class

class Notification {
  constructor(receiver) {
    if (this.constructor === Notification) {
      throw new Error("Cannot instantiate abstract class!");
    }
    this.receiver = receiver;
  }

  send(message) {
    throw new Error("Method 'send()' must be implemented.");
  }
}

// Payment Implementations (Abstraction + Polymorphism)

class CreditCardPayment extends Payment {
  constructor(amount, cardNumber) {
    super(amount);
    this.cardNumber = cardNumber;
    ImplementInterface.interface(this, ["process"]);
  }

  process() {
    console.log(
      `💳 Processing Credit Card payment of $${this.amount} using card ${this.cardNumber}`
    );
    return true;
  }
}

class PaypalPayment extends Payment {
  constructor(amount, email) {
    super(amount);
    this.email = email;
    ImplementInterface.interface(this, ["process"]);
  }
  process() {
    console.log(
      `💰 Processing PayPal payment of $${this.amount} for ${this.email}`
    );
    return true;
  }
}

// Notification Implementations

class EmailNotification extends Notification {
  constructor(receiver, email) {
    super(receiver);
    this.email = email;
    ImplementInterface.interface(this, ["pushed"]);
  }

  send(message) {
    console.log(`📧 Email sent to ${this.email}: "${message}"`);
  }
  pushed(message) {
    console.log(`Notified: Email is send to ${this.email}: "${message}"`);
  }
}

class SMSNotification extends Notification {
  constructor(receiver, phone) {
    super(receiver);
    this.phone = phone;
    ImplementInterface.interface(this, ["send"]);
  }

  send(message) {
    console.log(`📱 SMS sent to ${this.phone}: "${message}"`);
  }
}

// User Class (Encapsulation + Dependency Injection)

class User {
  #password;

  constructor(name, email, phone, password) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.#password = password;
    this.isPaid = false;
  }

  validatePassword(pass) {
    return this.#password === pass;
  }

  makePayment(paymentMethod) {
    console.log(`🔄 ${this.name} initiating payment...`);
    this.isPaid = paymentMethod.process();
    return this.isPaid;
  }

  notify(notificationService, message) {
    notificationService.pushed(message);
  }
}

// Bringing It All Together (Real-world Simulation)

// Create user
const user = new User(
  "Atikuzzaman",
  "atik@gmail.com",
  "+8801729414662",
  "1234"
);

// Payment & Notification objects
const payment = new CreditCardPayment(200, "1234-5678-9999");
const notify = new EmailNotification(user.name, user.email);


// Simulation
if (user.makePayment(payment)) {
  user.notify(notify, "✅ Your subscription has been activated!");
} else {
  user.notify(notify, "❌ Payment failed. Try again!");
}
