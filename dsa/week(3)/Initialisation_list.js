class Student {
    constructor(rollNumber, age) {
      this.rollNumber = rollNumber;
      this.age = age;
      this.x = this.age; 
    }
    display() {
      console.log(`${this.age} ${this.rollNumber} ${this.x}`);
    }
  }
  const s1 = new Student(101, 20);
  s1.age = 40;
  s1.display();
  s1.rollNumber = 202; 
  s1.display();
  