// function functionName(parameter1, parameter2, ...) {
//     return value; 
// }

// function add(a, b) {
//     return a + b;
// }
// function createObject() {
//     return { name: "John", age: 25 };
// }
// function getArray() {
//     return [1, 2, 3];
// }
// function getFunction() {
//     return function (x) {
//         return x * x;
//     };
// }
// function doNothing() {
//     console.log("This does nothing!");
// }






// Array 
// dynamic and not stored in contiguous memory locations. 
// Instead, they are objects with key-value pairs where keys are indices.
// Memory addresses are abstracted, so you cannot directly calculate memory locations.



// let age1 = [10, 14, 16, 18, 19];
// console.log("First element:", age1[0]);
// console.log("Second element:", age1[1]);
// console.log("Third element:", age1[2]);

// let myArray = [5, 4, 3, 2, 1];
// let size = myArray.length;
// console.log("Number of elements:", size);

// function printAge(age) {
//     for (let i = 0; i < age.length; i++) {
//         console.log(age[i]);
//     }
// }
// let age = [11, 14, 15, 18, 20];
// printAge(age);








// Mutator Methods (Modify the original array):
// // Initial array

// let myArray = [10, 20, 30, 40, 50];
// console.log("Initial Array:", myArray);

// // 1. push() - Adds elements to the end of an array
// myArray.push(60, 70);
// console.log("After push(60, 70):", myArray);

// // 2. pop() - Removes the last element of an array
// let poppedElement = myArray.pop();
// console.log("After pop():", myArray, "| Popped Element:", poppedElement);

// // 3. shift() - Removes the first element of an array
// let shiftedElement = myArray.shift();
// console.log("After shift():", myArray, "| Shifted Element:", shiftedElement);

// // 4. unshift() - Adds elements to the beginning of an array
// myArray.unshift(5, 15);
// console.log("After unshift(5, 15):", myArray);

// // 5. splice() - Adds/removes elements from the array at a specific position
// // Removing 2 elements from index 2 and adding 25, 35
// myArray.splice(2, 2, 25, 35);
// console.log("After splice(2, 2, 25, 35):", myArray);

// // 6. reverse() - Reverses the order of elements in the array
// myArray.reverse();
// console.log("After reverse():", myArray);

// // 7. sort() - Sorts the elements of an array
// myArray.sort((a, b) => a - b); // Ascending sort
// console.log("After sort():", myArray);

// // 8. fill() - Fills elements in an array with a static value
// myArray.fill(0, 2, 4); // Fills 0 from index 2 to index 4 (not including index 4)
// console.log("After fill(0, 2, 4):", myArray);

// // 9. copyWithin() - Copies a part of the array to another location within the same array
// // Copy elements from index 0 to 2, and paste them starting from index 3
// myArray.copyWithin(3, 0, 2);
// console.log("After copyWithin(3, 0, 2):", myArray);








// // Accessor Methods (Do not modify the original array):


// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// // 1. concat() - Combines two or more arrays into a new array
// const combinedArray = array1.concat(array2);
// console.log('concat():', combinedArray);

// // 2. slice() - Extracts a portion of an array into a new array
// const slicedArray = combinedArray.slice(1, 4);
// console.log('slice():', slicedArray);

// // 3. indexOf() - Returns the first index of a specified element
// const index = combinedArray.indexOf(3);
// console.log('indexOf():', index);

// // 4. lastIndexOf() - Returns the last index of a specified element
// const lastIndex = combinedArray.lastIndexOf(2);
// console.log('lastIndexOf():', lastIndex);

// // 5. includes() - Checks if the array contains a specified element
// const hasElement = combinedArray.includes(5);
// console.log('includes():', hasElement);

// // 6. join() - Joins all elements into a string
// const joinedString = combinedArray.join(', ');
// console.log('join():', joinedString);

// // 7. toString() - Converts the array to a string
// const arrayString = combinedArray.toString();
// console.log('toString():', arrayString);

// // 8. toLocaleString() - Converts the array to a localized string
// const localeString = combinedArray.toLocaleString();
// console.log('toLocaleString():', localeString);

// Iteration Methods (Work on each element):


// const array = [1, 2, 3, 4, 5];

// // 1. forEach() - Executes a provided function on each array element
// array.forEach(element => console.log('forEach():', element));

// // 2. map() - Creates a new array with the results of calling a function on every element
// const mappedArray = array.map(element => element * 2);
// console.log('map():', mappedArray);

// // 3. filter() - Creates a new array with elements that pass the test of a provided function
// const filteredArray = array.filter(element => element > 2);
// console.log('filter():', filteredArray);

// // 4. reduce() - Reduces the array to a single value by applying a function
// const sum = array.reduce((acc, current) => acc + current, 0);
// console.log('reduce():', sum);

// // 5. reduceRight() - Similar to reduce() but works from right to left
// const sumRight = array.reduceRight((acc, current) => acc + current, 0);
// console.log('reduceRight():', sumRight);

// // 6. every() - Checks if all elements pass the test of a function
// const allGreaterThanZero = array.every(element => element > 0);
// console.log('every():', allGreaterThanZero);

// // 7. some() - Checks if at least one element passes the test of a function
// const someGreaterThanThree = array.some(element => element > 3);
// console.log('some():', someGreaterThanThree);

// // 8. find() - Returns the first element that satisfies the condition in a function
// const foundElement = array.find(element => element > 3);
// console.log('find():', foundElement);

// // 9. findIndex() - Returns the index of the first element that satisfies the condition
// const foundIndex = array.findIndex(element => element > 3);
// console.log('findIndex():', foundIndex);

// // 10. keys() - Returns an iterator containing the keys (indexes) of the array
// const keysIterator = array.keys();
// console.log('keys():', [...keysIterator]);

// // 11. values() - Returns an iterator containing the values of the array
// const valuesIterator = array.values();
// console.log('values():', [...valuesIterator]);

// // 12. entries() - Returns an iterator containing key-value pairs of the array
// const entriesIterator = array.entries();
// console.log('entries():', [...entriesIterator]);
