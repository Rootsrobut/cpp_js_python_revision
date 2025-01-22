class Student {
  constructor() {
    this.rollNumber = null;
    this._age = null;
    this.display = function() {
      console.log(this._age, this.rollNumber);
    };
    this.getAge = function() {
      return this._age;
    };
    this.setAge = function(a, password) {
      if (password !== 123) {
        return;
      }
      if (a < 0) {
        return;
      }
      this._age = a;
    };
  }
}

// Main function
function main() {
  let s1 = new Student();
  let s2 = new Student();
  let s3 = new Student();
  let s4 = new Student();
  let s5 = new Student();

 
  s1.rollNumber = 101;

  console.log("S1 age : ", s1.getAge());
  console.log("S1 Roll number : ", s1.rollNumber);
  s1.display();
  s2.display();

 
  let s6 = new Student();
  s6.rollNumber = 104233;

  // Display age and rollNumber for s6
  s6.display();
  console.log("S6 age : ", s6.getAge());

  // Set rollNumber for s6


  // Create new objects
  let s7 = new Student();
  let s8 = new Student();

  // Set age for s7 and s8
  s7.setAge(20, 123);
  s8.setAge(24, 123);

  // Display age and rollNumber for s7 and s8
  s7.display();
  s8.display();
}

// Call the main function
main();