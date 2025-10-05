class Principal {
  constructor(name) {
    this.name = name;
  }

  announce(message) {
    console.log(`Principal ${this.name} announced: ${message}`);
  }

  meeting(teachers, students) {
    console.log(`Principal ${this.name} is calling a meeting...`);
    teachers.forEach((t) => console.log(`- Teacher ${t.name} is attending.`));
    students.forEach((s) => console.log(`- Student ${s.name} is attending.`));
  }
}

class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }

  teach() {
    console.log(`${this.name} is teaching ${this.subject}.`);
  }
}
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying for grade ${this.grade}.`);
  }
}
class School {
  constructor(name, principalName) {
    this.name = name;
    this.principal = new Principal(principalName); // Composition
    this.teachers = []; // Aggregation
    this.students = []; // Aggregation
  }

  addTeacher(teacher) {
    this.teachers.push(teacher);
  }

  addStudent(student) {
    this.students.push(student);
  }

  showDetails() {
    console.log(`🏫 School: ${this.name}`);
    console.log(`Principal: ${this.principal.name}`);
    console.log(`Teachers: ${this.teachers.map((t) => t.name).join(", ")}`);
    console.log(`Students: ${this.students.map((s) => s.name).join(", ")}`);
  }
}
// Create School
const mySchool = new School("Green Valley School", "Mr. Rahman");

// Create Teachers
const teacher1 = new Teacher("Atik", "Mathematics");
const teacher2 = new Teacher("Ayesha", "Science");

// Create Students
const student1 = new Student("Rafi", "10");
const student2 = new Student("Mim", "9");
const student3 = new Student("Ruhul", "10");

// Add Teachers & Students to School
mySchool.addTeacher(teacher1);
mySchool.addTeacher(teacher2);
mySchool.addStudent(student1);
mySchool.addStudent(student2);
mySchool.addStudent(student3);

// Show School Details
mySchool.showDetails();

// Actions
teacher1.teach();
student2.study();
mySchool.principal.announce("Exam will start next week!");
mySchool.principal.meeting(mySchool.teachers, mySchool.students);
