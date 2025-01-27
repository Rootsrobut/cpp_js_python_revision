#include <iostream>
using namespace std;
int factorial(int n)
{
    if (n == 0)
    {
        return 1;
    }
    return n * factorial(n - 1);
}
bool is_sorted(int a[], int size) {
    if (size == 0 || size == 1) {
        return true;
    }
    if (a[0] > a[1]) {
        return false;
    }
    return is_sorted(a + 1, size - 1);
}
int main()
{
    cout << factorial(4) << endl;
    int arr[] = {1, 6, 3, 4, 5}; 
    int size = sizeof(arr) / sizeof(arr[0]); 
    cout<<(is_sorted(arr, size))<<endl;

}