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
const { getInfo } = mobile;
getInfo.call(mobile);
