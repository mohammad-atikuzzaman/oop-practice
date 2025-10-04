class Payment {
  constructor(name) {
    this.name = name;
  }
  processPayment() {
    return "General Payment Processing";
  }
}

class CashPayment extends Payment {
  constructor(name, amount) {
    super(name);
    this.amount = amount;
  }
  processPayment() {
    return `Crypto Currency Payment Processing, Amount is ${this.amount} to ${this.name}`;
  }
}
class CreditCardPayment extends Payment {
  constructor(name, cardNumber, amount) {
    super(name);
    this.cardNumber = cardNumber;
    this.amount = amount;
  }
  processPayment() {
    return `Crypto Currency Payment Processing on ${this.cardNumber}, amount is ${this.amount} to ${this.name}`;
  }
}

class PaypalPayment extends Payment {
  constructor(name, email, amount) {
    super(name);
    this.email = email;
    this.amount = amount;
  }
  processPayment() {
    return `Crypto Currency Payment Processing on ${this.email}, amount is ${this.amount} to ${this.name}`;
  }
}
class CryptoCurrency extends Payment {
  constructor(name, address, amount) {
    super(name);
    this.cryptoAddress = address;
    this.amount = amount;
  }
  processPayment() {
    return `Crypto Currency Payment Processing on ${this.cryptoAddress}, amount is ${this.amount} to ${this.name}`;
  }
}

const payments = [
  new CashPayment("Akash", 100),
  new CreditCardPayment("Atik", 7146162374, 200),
  new PaypalPayment("Atikuzzaman", "akash203037@gmail.com", 80),
  new CryptoCurrency("Md Akash", "8738-471238", 30000),
];

payments.forEach((pay) => console.log(pay.processPayment()));
