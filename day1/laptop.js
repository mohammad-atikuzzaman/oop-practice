const laptop = {
  brand: "Asus",
  model: "Vivobook 15",
  ram: 8,
  price: "$520",
  //   here I hve use extra = 0 , because 0 will be default value of extra
  upgradeRam(extra = 0) {
    console.log(
      `This is ${this.brand} ${this.model}, this ram is ${
        this.ram + extra
      } GB. And the price of this laptop is ${this.price}`
    );
  },
};
// console.log(laptop);


// for upgrading ram we need to pass the value on the method as parameter
// laptop.upgradeRam(2);



laptop.owner = "Atik"
// console.log(laptop);


const {brand, model, upgradeRam}= laptop
// console.log(model);


// If we destructure the method from the object, we need to use the object as first parameter and extra value as second parameter. Or if we receive multiple value the we need to pass multiple parameter step by step.
upgradeRam.call(laptop, 2)
