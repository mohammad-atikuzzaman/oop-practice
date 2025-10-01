const person = {
  name: "Atik",
  age: "25",
  city: "Pabna",
  introduce() {
    console.log(`Hi, am ${this.name}, ${this.age} years old form ${this.city}`);
  },
};

// person.introduce()
person.hobby= "Codding"

const {city, hobby}=person
console.log(hobby);