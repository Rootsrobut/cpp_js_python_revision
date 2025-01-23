#include <iostream>
using namespace std;
class Student {
	public :
		int age;
		const int rollNumber;
		int &x;		// age reference variable
		Student(int r, int age) : rollNumber(r), age(age), x(this -> age) {
			// rollNumber = r;
		}
		void display(){
		    cout<<this->age<<" "<<this->rollNumber<<" "<<this->x<<endl;
		}
};
int main() {
	Student s1(101, 20);
	s1.age = 20;
	s1.display();
	//s1.rollNumber = 101;
}

// Constructors And Member Initializer Lists C++

// This is used Using to initialize data members of classes.

//I Two ways are there to do this.
// 1. Using {} this is uniform initialization and should be prefered.
// 2. using ()
