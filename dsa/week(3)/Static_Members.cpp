#include <iostream>
using namespace std;
class Student {
	static int totalStudents;		// total number of students present
	public :
	int rollNumber;
	int age;
	Student() {
		totalStudents++;
	}
	int getRollNumber() {
		return rollNumber;
	}
	static int getTotalStudent() {
		return totalStudents;
	}
};
int Student :: totalStudents = 0;	// initialze static data members
int main() {
	Student s1;
	Student s2;
	Student s3, s4, s5;
	// cout << Student :: totalStudents << endl; is private within this context
	cout << Student :: getTotalStudent() << endl; // static function call without object create
	cout << s1.getTotalStudent() << endl;
}

// its is a property of the class and not of an object, we can’t simply access these values from the object name followed by the variable name