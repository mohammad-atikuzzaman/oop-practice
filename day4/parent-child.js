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
  greeBoth() {
   return [super.greet() , this.greet()]
  }
}

const atik = new Child("Atik", 24);
// console.log(atik.greeBoth()[0]);
