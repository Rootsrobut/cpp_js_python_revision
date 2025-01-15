#include <iostream>
#include <string>
#include <cstring>
using namespace std;

int main() {
    string str1;
    string str2;
    cout << "Enter the full sentence: ";
    getline(cin, str1);
    cout << "You entered: " << str1 << endl;
    getline(cin,str2);
    
    // Length of a string (strlen)
    char str1[] = "Hello";
    cout << "Length of str1: " << strlen(str1) << endl;

    // Comparison of two strings (strcmp)
    char str2[] = "World";
    int result = strcmp(str1, str2);
    if (result == 0) {
        cout << "The strings are equal" << endl;
    } else if (result < 0) {
        cout << "str1 is less than str2" << endl;
    } else {
        cout << "str1 is greater than str2" << endl;
    }

    // Copy string (strcpy)
    char sourceString[] = "Source";
    char destinationString[20]; // Ensure sufficient size
    strcpy(destinationString, sourceString);
    cout << "Destination String: " << destinationString << endl;

    // Copy specified number of characters (strncpy)
    char partialCopy[4]; // Ensure sufficient size + 1 for null terminator
    strncpy(partialCopy, sourceString, 3);
    partialCopy[3] = '\0'; // Null terminate manually
    cout << "Partial Copy: " << partialCopy << endl;

    return 0;
}
