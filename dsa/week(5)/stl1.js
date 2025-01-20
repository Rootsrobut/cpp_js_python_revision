// let v1 = new Array(5);
// for (let i = 0; i < 5; i++) {
//   const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   readline.question(`Enter element ${i + 1}: `, (input) => {
//     v1[i] = parseInt(input);
//     if (i === 4) {
//       readline.close();
//       main(v1);
//     }
//   });
// }

// function main(v1) {
//   console.log(v1.length);
//   v1.push(-1);
//   v1.pop();

//   // Clear the array
//   v1.length = 0;
//   console.log(v1[v1.length - 1]); // equivalent to v1.back()
//   console.log(v1[0]); // equivalent to v1.front()
// }

// let v1 = [1, 2, 3, 4, 5];
// for (let i = 0; i < v1.length; i++) {
//   console.log(v1[i]);
// }
// for (let ele of v1) {
//   process.stdout.write(ele + " "); // Use process.stdout.write to avoid newline
// }
// console.log(); // Newline after printing all elements
// // Check if the array is empty
// console.log(v1.length === 0);

// let v1 = new Array(10).fill(1);
// v1 = v1.reverse();
// v1.splice(1, 3);
// v1.sort((a, b) => b - a);
// [v1[0], v1[1]] = [v1[1], v1[0]];

// let v1 = [];
// for (let i = 0; i < 5; i++) {
//   v1.push([]);
// }

// // Resize each sub-array to have 'c' elements, initialized to 0
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < c; j++) {
//     v1[i].push(0);
//   }
// }

// Create a 1D array filled with 1s, equivalent to C++ vector<int> v2(5, 1);
// let v2 = new Array(5).fill(1);

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter row and column (space-separated): ", (input) => {
//   const [row, col] = input.split(" ").map(Number);
//   let v3 = Array(row).fill().map(() => Array(col).fill(0)); // vector<vector<int>> v3(row, vector<int>(col));
//   console.log(v3);
//   rl.close();
// });

// let students = [];
// let student = {
//   id: id,
//   grade: grade,
// };
// function addStudent(id, grade) {
//   let student = {
//     id: id,
//     grade: grade,
//   };
//   students.push(student);
// }

// addStudent(1, "A");
// addStudent(2, "B");
// addStudent(3, "C");
// console.log(students);

// Pair
// let p1 = {};
// let p3 = { first: 10, second: 'A' };
// function makePair(first, second) {
//     return { first, second };
// }
// let p9 = makePair(10, 'A');

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let students = [];
let num;

// Function to ask question and get input from user
function askQuestion(query) {
  return new Promise((resolve) =>
    readline.question(query, (ans) => resolve(ans))
  );
}

(async () => {
  num = parseInt(await askQuestion("Enter number of students: "));

  for (let i = 0; i < num; i++) {
    let roll_number = await askQuestion("Enter roll number: ");
    let section = await askQuestion("Enter section: ");
    students.push({ roll_number, section });
  }

  // Sorting the students array
  students.sort((a, b) => {
    // Assuming the comparison logic is based on roll_number
    return a.section - b.section;
  });

  // Printing the sorted list of students
  for (let i = 0; i < num; i++) {
    console.log(`${students[i].roll_number} ${students[i].section}`);
  }
  readline.close();
})();
