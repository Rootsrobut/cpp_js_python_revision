// Vehicle (base class)  <------- Car (derived class of Vehicle) <---------  HondaCity (derived class of Car)
// Vehicle Constructor <--- Car Constructor <--- HondaCity Constructor <--- HondaCity Destructor <---  Car Destructor <--  Vehicle Destructor

#include <iostream>
using namespace std;

class Vehicle {
private:
    int maxSpeed;
protected:
    int numTyres;
public:
    string color;

    Vehicle(int z) {
        cout << "Vehicle's Parametrized constructor" << endl;
        maxSpeed = z;
    }
    ~Vehicle() {
        cout << "Vehicle's Destructor" << endl;
    }
};

class Car : public Vehicle {
public:
    int numGears;
    Car(int x, int y) : Vehicle(x) {
        cout << "Car's constructor" << endl;
        numGears = y;
    }
    ~Car() {
        cout << "Car's Destructor" << endl;
    }

    void print() {
        cout << "NumTyres: " << numTyres << endl;
        cout << "Color: " << color << endl;
        cout << "Num gears: " << numGears << endl;
        
    }
};

class HondaCity : public Car {
public:
    HondaCity(int x, int y) : Car(x, y) {
        cout << "Honda city constructor" << endl;
    }

    ~HondaCity() {
        cout << "Honda city destructor" << endl;
    }
};

int main() {
    HondaCity h(4, 5);
    return 0;
}

