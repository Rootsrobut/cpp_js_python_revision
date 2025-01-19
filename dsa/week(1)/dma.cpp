#include <bits/stdc++.h>
using namespace std;
#define pi 3.14

int sum(int a, int b, int c = 0)
{ // here, c is the default argument
    return a + b + c;
}

int main()
{
    int n, m;
    cin >> n >> m;
    int **arr = new int*[n];
    for (int i = 0; i < n; i++)
    {
        arr[i] = new int[m];
    }
    for (int i = 0; i < n; i++)
    {
        delete[] arr[i];
    }
    delete[] arr;

    int a = 2, b = 3, c = 4;
    cout << sum(a, b) << endl;    // here, c will automatically be taken as 0
    cout << sum(a, b, c) << endl; // as the value of c is provided, the value of c will be 4

    const int d = 5;

    return 0;
}