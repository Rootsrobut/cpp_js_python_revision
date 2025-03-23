#include <iostream>
#include <unordered_map>
#include <vector>
#include <string>
using namespace std;
int main() {
    unordered_map<string, char> students = {
        {"Alice", 'A'},
        {"Bob", 'B'},
        {"Charlie", 'A'},
        {"Diana", 'C'},
        {"Eve", 'B'}
    };
    unordered_map<char,vector<string>> gradeGroups;
    for (const auto& pair : students) {
        gradeGroups[pair.second].push_back(pair.first);
    }
    for (const auto& group : gradeGroups) {
        cout << group.first << ": ";
        for (const auto& student : group.second) {
            cout << student << ", ";
        }
        cout << endl;
    }

    return 0;
}