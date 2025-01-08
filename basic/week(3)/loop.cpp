#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 5; i++) {
        if (i == 3) {
            continue;  
        }
        if (i == 4) {
            break;  
        }
        cout << i << " ";
    }
    int a = 5, b = 3; // 5 = 0101, 3 = 0011 (binary)

    cout << "a & b = " << (a & b) << endl; // AND: 0101 & 0011 = 0001 (1)
    cout << "a | b = " << (a | b) << endl; // OR:  0101 | 0011 = 0111 (7)
    cout << "a ^ b = " << (a ^ b) << endl; // XOR: 0101 ^ 0011 = 0110 (6)
    cout << "~a = " << (~a) << endl;       // NOT: ~0101 = 1010 (2's complement representation)
    cout << "a << 1 = " << (a << 1) << endl; // Left shift: 0101 << 1 = 1010 (10)
    cout << "a >> 1 = " << (a >> 1) << endl; // Right shift: 0101 >> 1 = 0010 (2)

    return 0;
}
