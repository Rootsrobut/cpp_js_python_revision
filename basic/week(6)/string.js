// Length of a string (similar to strlen)
let str1 = "Hello";
console.log("Length of str1:", str1.length);

// Comparison of two strings (similar to strcmp)
let str2 = "World";
if (str1 === str2) {
    console.log("The strings are equal");
} else if (str1 < str2) {
    console.log("str1 is less than str2");
} else {
    console.log("str1 is greater than str2");
}

// Copy string (similar to strcpy)
let sourceString = "Source";
let destinationString = sourceString; // Direct assignment
console.log("Destination String:", destinationString);

// Copy specified number of characters (similar to strncpy)
let partialCopy = sourceString.substring(0, 3); // Copy first 3 characters
console.log("Partial Copy:", partialCopy);


let str = '  Hello World!  ';

// Basic Methods
console.log(str.length);               // Get length of the string: 15
console.log(str.toLowerCase());        // Convert to lowercase: '  hello world!  '
console.log(str.toUpperCase());        // Convert to uppercase: '  HELLO WORLD!  '
console.log(str.trim());               // Remove leading/trailing whitespace: 'Hello World!'

// Search and Match
console.log(str.indexOf('World'));     // Find index of substring: 8
console.log(str.lastIndexOf('o'));     // Find last index of a character: 9
console.log(str.includes('World'));    // Check if contains substring: true
console.log(str.startsWith('  Hello')); // Check if starts with: true
console.log(str.endsWith('!  '));      // Check if ends with: true

// Extracting and Slicing
console.log(str.slice(2, 7));          // Extract portion of string: 'Hello'
console.log(str.substring(2, 7));      // Similar to slice: 'Hello'
console.log(str.substr(2, 5));         // Extract portion (deprecated): 'Hello'
console.log(str.charAt(6));            // Get character at index: 'W'
console.log(str.charCodeAt(6));        // Get UTF-16 code of character: 87
console.log(str[6]);                   // Access character using bracket notation: 'W'

// Replace and Modify
console.log(str.replace('World', 'JS')); // Replace substring: '  Hello JS!  '
console.log(str.replaceAll('l', '*')); // Replace all occurrences: '  He**o Wor*d!  '
console.log(str.padStart(20, '-'));    // Pad start of string: '-----  Hello World!  '
console.log(str.padEnd(20, '-'));      // Pad end of string: '  Hello World!  -----'
console.log(str.repeat(2));            // Repeat string: '  Hello World!    Hello World!  '

// Splitting and Joining
let words = str.trim().split(' ');     // Split into array: ['Hello', 'World!']
console.log(words);
console.log(words.join('-'));          // Join array to string: 'Hello-World!'

// Searching with Patterns
console.log(str.match(/o/g));          // Match all occurrences of 'o': ['o', 'o']
console.log(str.search('World'));      // Search for substring: 8
console.log(str.matchAll(/o/g));       // Match all occurrences with iterator
console.log(str.replace(/o/g, '*'));   // Replace all using regex: '  Hell* W*rld!  '

// Raw and Encoding
console.log(String.raw`Hello\nWorld`); // Raw string (ignores escape): 'Hello\nWorld'

// Template Literal Conversion
let trimmedStr = str.trim();           // 'Hello World!'
console.log(`Welcome, ${trimmedStr}`); // Template literal usage: 'Welcome, Hello World!'
