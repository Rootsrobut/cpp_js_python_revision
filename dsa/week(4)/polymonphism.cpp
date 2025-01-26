// Polymorphism is generally of two types:


// Compile-time polymorphism

// Function Overloading and Operator Overloading


#include <iostream>
using namespace std;
int test(int a, int b) {
}
int test(int a) {
}
int test() {
}
int main() {

}


// Function Overriding
class Vehicle
{
public:
	string color;
	void print()
	{
		cout << "Vehicle" << endl;
	}
};
class Car : public Vehicle
{
public:
	int numGears;
	void print()
	{
		cout << "Car" << endl;
	}
};
int main()
{
	Vehicle v;
	Car c;
	v.print();
	c.print();
	Vehicle *v1 = new Vehicle;
	v1->print();
}



// Run-time polymorphism
