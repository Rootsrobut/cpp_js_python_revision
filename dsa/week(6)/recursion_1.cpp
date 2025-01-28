#include <iostream>
using namespace std;
#define int long long
#define faster ios_base::sync_with_stdio(false); cin.tie(nullptr);cout.tie(nullptr);
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

int binarysearch(int arr[],int st,int ed,int key){
    int mid=st+(ed-st)/2;
    if(st>ed){
        return -1;
    }
    if(arr[mid]==key){
        return mid;
    }
    else if(arr[mid]<key){
         return binarysearch(arr,mid+1,ed,key);
    }
    else{
         return binarysearch(arr,st,mid-1,key);
    }
}


int32_t main()
{
    faster;
    // cout << factorial(4) << endl;
    // int arr[] = {1, 2, 3, 4, 5}; 
    // int size = sizeof(arr) / sizeof(arr[0]); 
    // cout<<(is_sorted(arr, size))<<endl;
    int arr[] = {1, 3, 5, 7, 9, 11, 13, 15};
    int n = sizeof(arr) / sizeof(arr[0]);
    int key = 7;
    cout<<binarysearch(arr, 0, n - 1, key)<<endl;;
    return 0;



}