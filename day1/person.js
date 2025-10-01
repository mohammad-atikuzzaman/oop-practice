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
// console.log(hobby);



// if we want to destructure the method from object we need to use .call()  and also we need to bind the object
const {introduce}=person
introduce.call(person)
