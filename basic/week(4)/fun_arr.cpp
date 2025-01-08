#include<iostream>
using namespace std;


// return_type function_name(parameter1, parameter2, ...) {
//     return value; 
// }
int add(int a, int b) {
    return a + b;
}
int* getPointer(int& a) {
    return &a;
}
class MyClass {
public:
    int value;
};

MyClass createObject() {
    MyClass obj;
    obj.value = 10;
    return obj;
}
void printMessage() {
    std::cout << "Hello, World!" << std::endl;
}
template <typename T>
T multiply(T a, T b) {
    return a * b;
}


int main() {
    int age[] = {10, 14, 16, 18, 19};
    cout << "Address of first element: " << &age[0] << endl;
    cout << "Address of second element: " << &age[1] << endl;
    cout << "Address of third element: " << &age[2] << endl;

    return 0;


    return 0;
}