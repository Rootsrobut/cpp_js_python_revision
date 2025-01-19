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


let v1 = new Array(10).fill(1);
v1 = v1.reverse();
v1.splice(1, 3);
v1.sort((a, b) => b - a);
[v1[0], v1[1]] = [v1[1], v1[0]];

