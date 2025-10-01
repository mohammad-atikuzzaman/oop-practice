const mobile = {
  brand: "Realme",
  model: "Gt Master Edition",
  price: "$320",

  //   Arrow function does't work on the method of object literal

  //   getInfo: () => {
  //     console.log(
  //       `This is ${this.brand} ${this.model}, the price of this phone is ${this.price}`
  //     );
  //   },

  getInfo: function () {
    console.log(
      `This is ${this.brand} ${this.model}, the price of this phone is ${this.price}`
    );
  },
};

// console.log(mobile);

mobile.owner = "Atik";
// console.log(mobile);


const {model, price}= mobile
// console.log(price, model);



// If we don't destructure the method from object we can use the method like this way
// mobile.getInfo()



// When we destructure the method from the object, we need to use .call() method with bind the object
// const { getInfo } = mobile;
// getInfo.call(mobile);

