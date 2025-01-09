#include<bits/stdc++.h>
using namespace std;

void Linear_search(int arr[],int n,int key){
    for(int i=0;i<n;i++){
        if(arr[i]==key){
            cout<<"Element is present at index "<<i<<endl;
            return ;
        }
    }    
}
void Binary_search(int arr[],int n,int key){
    int low=0,high=n-1,mid;
    while(low<=high){
        mid=(low+high)/2;
        if(arr[mid]==key){
            cout<<"Element is present at index "<<mid<<endl;
            return ;
        }
        else if(arr[mid]>key){
            high=mid-1;
        }
        else{
            low=mid+1;
            }
        }
}
void Ternary_search(int arr[],int n,int key){
    int low=0,high=n-1,mid1,mid2;
    while(low<=high){
        mid1=low+(high-low)/3;;
        mid2=high-(high-low)/3;
        if(arr[mid1]==key || arr[mid2]==key){
            cout<<"Element is present at index "<<mid1<<endl;
            return ;
        }
        if(arr[mid1]<key){
            high=mid1-1;
        }
        else if(arr[mid2]>key){
            low=mid2+1;
        }
        else if(arr[mid1]>key && arr[mid2]<key){
            low=mid1+1;
            high=mid1-1;
        }
    }
    
}
int main(){
   ios_base::sync_with_stdio(false);
   cin.tie(0);
   cout.tie(0);
   int arr[]={121, 120, 131, 142, 455, 436};
   int n = sizeof(arr)/sizeof(arr[0]);
   int key=142;
// Linear search
Linear_search(arr,n,key);
// Binary search
Binary_search(arr,n,key);
// using stl
binary_search(arr,arr+n,key);
auto it=std::lower_bound(arr,arr+n,key);
if(it!=arr+n && *it==key){
cout<<"Element is present at index "<<it-arr<<endl;
}else{
    cout<<"Element is not present in array"<<endl;
}
// Ternary search
Ternary_search(arr,n,key);
}