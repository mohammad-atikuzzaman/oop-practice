class Parent {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hi, I am ${this.name} from Parent`;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  greet() {
    return `Hi, I am ${this.name}, I am ${this.age} years old. From Child`;
  }
}

// const p1= new Parent("Akash")
// console.log(p1.greet());

const atik = new Child("Atik", 24)
console.log(atik.greet());
