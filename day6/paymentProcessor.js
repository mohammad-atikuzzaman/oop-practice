class PaymentProcessor {
  constructor(paymentMethod) {
    this.paymentMethod = paymentMethod;
  }
  processPayment(amount) {
  return  this.paymentMethod.pay(amount);
  }
}
class BkashPayment {
  pay(amount) {
    return `Paying ${amount} via Bkash`;
  }
}
class NagadPayment {
  pay(amount) {
    return `Paying ${amount} via Nagad`;
  }
}
class CardPayment {
  pay(amount) {
    return `Paying ${amount} via Card`;
  }
}
class CashPayment {
  pay(amount) {
    return `Paying ${amount} via Cash`;
  }
}
const bkash = new BkashPayment();
const nagad = new NagadPayment();
const card = new CardPayment();
const cash = new CashPayment();



const processor = new PaymentProcessor(bkash)
console.log(processor.processPayment(400));
