function Student(name, roll, marks) {
  this.name = name;
  this.roll = roll;
  this.marks = marks;
}


Student.prototype.isPass= function(){
    return this.marks >= 33 ?"Pass": "Fail"
}


const akash = new Student("Akash", 10, 32)
// console.log(akash);

console.log(akash.isPass());