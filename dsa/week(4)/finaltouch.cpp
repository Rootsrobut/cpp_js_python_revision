// 2. Run-time polymorphism

#include <iostream>
using namespace std;


class Base {
protected:
    int baseValue;

public:
    Base(int val) : baseValue(val) {}
    // Virtual function
    virtual void display() {
        cout << "Base class value: " << baseValue << endl;
    }
    // Pure virtual function
    virtual void show() = 0;
    friend void accessBaseValue(const Base& obj);
};

class Derived : public Base {
private:
    int derivedValue;
public:
    Derived(int baseVal, int derivedVal) : Base(baseVal), derivedValue(derivedVal) {}
    void display() override {
        cout << "Derived class values: BaseValue = " << baseValue << ", DerivedValue = " << derivedValue << endl;
    }
    void show() override {
        cout << "Derived class specific implementation of show()." << endl;
    }
    friend void accessDerivedValue(const Derived& obj);
};


void accessBaseValue(const Base& obj) {
    cout << "Accessing Base class protected value: " << obj.baseValue << endl;
}


void accessDerivedValue(const Derived& obj) {
    cout << "Accessing Derived class private value: " << obj.derivedValue << endl;
}

int main() {
    Derived obj(10, 20); 

    Base* basePtr = &obj;
    basePtr->display(); // Calls Derived's display() because it's virtual

    // Pure virtual function demonstration
    obj.show(); // Derived class must implement show()

    // Friend function demonstration
    accessBaseValue(obj);     // Access Base's protected member
    accessDerivedValue(obj);  // Access Derived's private member

    return 0;
}

