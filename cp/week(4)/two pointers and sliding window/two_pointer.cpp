#include<bits/stdc++.h>
using namespace std;
int towpointer(int arr[],int n,int traget){
    int i=0,j=n-1;
    int count=0;
    while(i<j){
        int sum=arr[i]+arr[j];
        if(sum==traget){
            if(arr[i]==arr[j]){
                int freq=j-i+1;
                count+=(freq*(freq-1))/2;
                break;
            }else {
                int left = 1, right = 1;
                while (i + 1 < j && arr[i] == arr[i + 1]) {
                    left++;
                    i++;
                }
                while (j - 1 > i && arr[j] == arr[j - 1]) {
                    right++;
                    j--;
                }
                count += left * right;
                i++;
                j--;
            }

        }
        else if (sum<traget)
        {
           i++;
        }
        else{
            j--;
        }
        
    }
}




// given a sorted array.find the number of pair which have a sum=k;
int main(){
    int arr[]={1,4,4,5,5,5,6,6,11};
    int traget=11;
    int n=sizeof(arr)/sizeof(arr[0]);
    int ans=towpointer(arr,n,traget);
    cout<<ans<<endl;
    return 0;
}