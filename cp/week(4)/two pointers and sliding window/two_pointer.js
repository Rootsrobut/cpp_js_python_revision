function towpointer(arr,n,traget){
    let i=0,j=n-1;
    let count=0;
    while(i<j){
        let sum=arr[i]+arr[j];
        if(sum==traget){
            if(arr[i]==arr[j]){
                let freq=j-i+1;
                count+=(freq*(freq-1))/2;
                break;
            }else {
                let left = 1, right = 1;
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
    return count;
}
    
// given a sorted array.find the number of pair which have a sum=k;
const  arr=[1,4,4,5,5,5,6,6,11];
const traget=11;
const n=arr.length();
let ans=towpointer(arr,n,traget);
console.log(ans);