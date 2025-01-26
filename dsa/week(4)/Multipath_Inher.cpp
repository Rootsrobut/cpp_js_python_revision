#include <iostream>
using namespace std;
class Vehicle {
	private :
		int maxSpeed;
	protected :
		int numTyres;
	public :
		string color;
	Vehicle(int z) {
	cout << "Vehicle's Parametrized constructor " << z << endl;
		maxSpeed = z;
	}
	void print() {
		cout << "Vehicle" << endl;
	}
};
class Car : virtual public Vehicle {
	public :
		int numGears;
		Car() : Vehicle(3){
			cout << "Car's default constructor " << endl;
		}
		void print() {
			cout << "NumTyres : " << numTyres << endl;
			cout << "Color : " << color << endl;
			cout << "Num gears : " << numGears << endl;
		}
};
class Truck : virtual public Vehicle {
	public :
		Truck() : Vehicle(4) {
			cout << "Truck's constructor " << endl;
		}
};
class Bus : public Car, public Truck {
	public :
		Bus() : Vehicle(5) {
			cout << "Bus's constructor " << endl;
		}
};
int main() {
	Bus b;
	b.print();
	//b.Car :: print();
}

