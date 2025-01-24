class Student {
    static totalStudents = 0; 
    constructor() {
      this.rollNumber = null;
      this.age = null;        
      Student.totalStudents++; 
    }
    getRollNumber() {
      return this.rollNumber;
    }
    static getTotalStudents() {
      return Student.totalStudents;
    }
  }
  // Create instances
  const s1 = new Student();
  const s2 = new Student();
  const s3 = new Student();
  const s4 = new Student();
  const s5 = new Student();
  console.log(Student.getTotalStudents());
  console.log(s1.constructor.getTotalStudents()); 
  