class Student {
  constructor(age, name) {
    this.age = age;
     // Shallow copy: directly assign the reference
     // this.name = name;
    // Deep copy: create a new string by splitting and joining
    this.name = name.split("").join("");
  }
  // Deep copy constructor
  static copy(student) {
    return new Student(student.age, student.name.split("").join(""));
    // return new Student(student.age, student.name); // Same reference for `name`
  }
  display() {
    console.log(`${this.name} ${this.age}`);
  }
}

let name = "abcd";
let s1 = new Student(20, name);
s1.display();
let s2 = Student.copy(s1);
// Modify the copied student's name
s2.name = "x" + s2.name.slice(1);
s1.display(); // Original remains unchanged
s2.display();
