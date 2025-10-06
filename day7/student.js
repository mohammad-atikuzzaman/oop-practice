// learning getter and setter method of accessing data control

class Student {
  #gpa;
  constructor(name, role, gpa) {
    this.name = name;
    this.role = role;

    // Instead this type of syntax
    // this.#gpa = gpa;
  }

  //   getResult() {
  //     return this.#gpa;
  //   }

  get gpa() {
    return this.#gpa;
  }

  // We will use this type of syntax "get, set"
  set gpa(value) {
    if (value < 0 || value > 5) return "Please provide valid value";
    return (this.#gpa = value);
  }
}
const s1 = new Student("Akash", 12, 3.11);
s1.gpa = 4.5;
// console.log(s1.getResult());

const { name, gpa } = s1;
console.log(gpa);
