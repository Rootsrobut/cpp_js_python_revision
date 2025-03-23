// Function to get the string corresponding to a digit
function getString(d) {
    switch (d) {
        case 2: return "abc";
        case 3: return "def";
        case 4: return "ghi";
        case 5: return "jkl";
        case 6: return "mno";
        case 7: return "pqrs";
        case 8: return "tuv";
        case 9: return "wxyz";
        default: return "";
    }
}

// Keypad function to generate all possible combinations
function keypad(input, output) {
    if (input === 0) {
        output[0] = "";
        return 1;
    }

    let lastDigit = input % 10;
    let smallNumber = Math.floor(input / 10);
    let smallOutputSize = keypad(smallNumber, output);

    let options = getString(lastDigit);
    let totalCombinations = smallOutputSize * options.length;

    // Make copies of the existing combinations and append characters
    for (let i = options.length - 1; i >= 0; i--) {
        for (let j = 0; j < smallOutputSize; j++) {
            output[j + i * smallOutputSize] = output[j] + options[i];
        }
    }

    return totalCombinations;
}

// Function to print all subsequences of a string
function printSubsequences(input, output) {
    if (input === "") {
        console.log(output);
        return;
    }
    // Exclude the first character
    printSubsequences(input.substring(1), output);
    // Include the first character
    printSubsequences(input.substring(1), output + input[0]);
}

// Function to return all subsequences of a string
function subsequences(input, output) {
    if (input === "") {
        output[0] = "";
        return 1;
    }

    let smallString = input.substring(1);
    let smallOutputSize = subsequences(smallString, output);

    // Append the first character to each subsequence
    for (let i = 0; i < smallOutputSize; i++) {
        output[i + smallOutputSize] = input[0] + output[i];
    }

    return 2 * smallOutputSize;
}

// Main function
function main() {
    // Test Keypad Problem
    let n = prompt("Enter a number for keypad combinations: ");
    let keypadOutput = new Array(1000);
    let keypadCount = keypad(parseInt(n), keypadOutput);
    console.log("Keypad Combinations:");
    for (let i = 0; i < keypadCount; i++) {
        console.log(keypadOutput[i]);
    }

    // Test Subsequence Problem
    let input = prompt("Enter a string for subsequences: ");

    // Print subsequences
    console.log("Subsequences (printed):");
    printSubsequences(input, "");

    // Store and print subsequences
    let subsequenceOutput = new Array(1000);
    let subsequenceCount = subsequences(input, subsequenceOutput);
    console.log("Subsequences (stored):");
    for (let i = 0; i < subsequenceCount; i++) {
        console.log(subsequenceOutput[i]);
    }
}

main();