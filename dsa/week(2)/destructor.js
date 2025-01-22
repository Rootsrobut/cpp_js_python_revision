class Student {
  constructor(rollNumber, age) {
    this.rollNumber = rollNumber;
    this.age = age;
  }
  display() {
    console.log(`${this.age} ${this.rollNumber}`);
  }
  getAge() {
    return this.age;
  }
  setAge(age, password) {
    if (password !== 123) {
      return;
    }
    if (age < 0) {
      return;
    }
    this.age = age;
  }
}

const s1 = new Student(10, 1001);
const s2 = new Student(20, 2001);
const s3 = new Student(30, 3001);

s2.rollNumber = s1.rollNumber;
s2.age = s1.age;

s3.rollNumber = s2.rollNumber;
s3.age = s2.age;



console.log("S1 : ");
s1.display();
console.log("S2 : ");
s2.display();
console.log("S3 : ");
s3.display();

const s4 = new Student(s3.rollNumber, s3.age);
const s6 = new Student(s1.rollNumber, s1.age);

console.log("S4 : ");
s4.display();
console.log("S6 : ");
s6.display()