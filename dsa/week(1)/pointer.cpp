#include <iostream>
using namespace std;

void increment1(int **p)
{
    p = p + 1;
}
void increment2(int **p)
{
    *p = *p + 1;
}
void increment3(int **p)
{
    **p = **p + 1;
}
int main()
{
    // int i = 10;
    // int *p = &i;
    // cout << p << endl;
    // p=p+1;
    // p = p + 2;
    // cout << p << endl;
    // p = p - 2;
    // cout << p << endl;
    // double d = 102.3;
    // double *dp = &d;
    // cout << dp << endl;
    // dp++;
    // cout << dp << endl;

    // int a[10];
    // cout << a << endl;
    // cout << &a[0] << endl;
    // a[0] = 5;
    // cout << *a << endl;
    // cout << *(a + 1) << endl;
    // int *p = &a[0];
    // cout << a << endl;
    // cout << p << endl;
    // cout << &p << endl;
    // cout << &a << endl;
    // cout << sizeof(p) << endl;
    // cout << sizeof(a) << endl;
    // p = p + 1;
    // a=a+1; // not allowed

    // char str[] ="abcde";
    // char *pstr ="abcde";
    // int a[] = {1, 2, 3};
    // char b[] = "abc";
    // cout << a << endl;
    // cout << b << endl;
    // char *c = &b[0];
    // cout << c << endl;
    // char c1 = 'a';
    // char *pc = &c1;
    // cout << c1 << endl;
    // cout << pc << endl;

    int i = 10;
    int *p = &i;
    int **p2 = &p;
    cout << p2 << endl;
    cout << &p << endl;
    cout << p << endl;
    cout << *p2 << endl;
    cout << &i << endl;
    cout << i << endl;
    cout << *p << endl;
    cout << **p2 << endl;
}