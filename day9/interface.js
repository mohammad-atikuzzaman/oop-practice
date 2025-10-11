// system 1

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

// system 2
function Interface(obj, methods) {
  for (let method of methods) {
    if (typeof obj[method] !== "function") {
      throw new Error("Class must implement method");
    }
  }
}

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
// ImplementInterface.ensureImplements(new PayPal(), [
//   "connect",
//   "pay",
//   "disconnect",
// ]);
// ImplementInterface.ensureImplements(new Stripe(), [
//   "connect",
//   "pay",
//   "disconnect",
// ]);
Interface(new Stripe(), ["connect", "pay", "disconnect"]);
