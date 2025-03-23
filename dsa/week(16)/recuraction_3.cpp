#include <iostream>
#include <string>
using namespace std;

// Function to get the string corresponding to a digit
string getString(int d) {
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
int keypad(int input, string output[]) {
    if (input == 0) {
        output[0] = "";
        return 1;
    }

    int lastDigit = input % 10;
    int smallNumber = input / 10;
    int smallOutputSize = keypad(smallNumber, output);

    string options = getString(lastDigit);
    int totalCombinations = smallOutputSize * options.length();

    // Make copies of the existing combinations and append characters
    for (int i = options.length() - 1; i >= 0; i--) {
        for (int j = 0; j < smallOutputSize; j++) {
            output[j + i * smallOutputSize] = output[j] + options[i];
        }
    }

    return totalCombinations;
}

// Function to print all subsequences of a string
void printSubsequences(string input, string output) {
    if (input.empty()) {
        cout << output << endl;
        return;
    }
    // Exclude the first character
    printSubsequences(input.substr(1), output);
    // Include the first character
    printSubsequences(input.substr(1), output + input[0]);
}

// Function to return all subsequences of a string
int subsequences(string input, string output[]) {
    if (input.empty()) {
        output[0] = "";
        return 1;
    }

    string smallString = input.substr(1);
    int smallOutputSize = subsequences(smallString, output);

    // Append the first character to each subsequence
    for (int i = 0; i < smallOutputSize; i++) {
        output[i + smallOutputSize] = input[0] + output[i];
    }

    return 2 * smallOutputSize;
}

int main() {
    // Test Keypad Problem
    int n;
    cout << "Enter a number for keypad combinations: ";
    cin >> n;
    string keypadOutput[1000];
    int keypadCount = keypad(n, keypadOutput);
    cout << "Keypad Combinations:" << endl;
    for (int i = 0; i < keypadCount; i++) {
        cout << keypadOutput[i] << endl;
    }

    // Test Subsequence Problem
    string input;
    cout << "Enter a string for subsequences: ";
    cin >> input;

    // Print subsequences
    cout << "Subsequences (printed):" << endl;
    printSubsequences(input, "");

    // Store and print subsequences
    string subsequenceOutput[1000];
    int subsequenceCount = subsequences(input, subsequenceOutput);
    cout << "Subsequences (stored):" << endl;
    for (int i = 0; i < subsequenceCount; i++) {
        cout << subsequenceOutput[i] << endl;
    }

    return 0;
}