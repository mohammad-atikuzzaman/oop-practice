function User(name, email) {
  this.name = name;
  this.email = email;

  // This is inefficient, so we would not use this type of method
  //   this.greet = function(){
  //     console.log(`Hi, I am ${this.name}`);
  //   }
}

// This is the best practice for make method for object.
User.prototype.greet = function () {
  console.log(`Hi, I am ${this.name}, my email is ${this.email}`);
};

const akash = new User("Akash", "akash203037@gmail.com");
const atik = new User("Atikuzzaman", "mdatikuzzaman1331@gmail.com");
// console.log(akash);

// akash.greet()
// atik.greet()

function Student(name, roll) {
  this.name = name;
  this.roll = roll;
}

// We can return the value from 
Student.prototype.greet = function(){
    return `Hi, I am ${this.name}, my roll is ${this.roll}`
}


const student1 = new Student("Md Akash",12)
console.log(student1.greet());