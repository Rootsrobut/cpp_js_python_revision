def towpointer(arr,n,traget):
    i=0
    j=n-1
    count=0
    while(i<j):
        sum=arr[i]+arr[j]
        if(sum==traget):
            if(arr[i]==arr[j]):
                freq=j-i+1
                count+=(freq*(freq-1))/2
                break
            else:
                left = 1
                right = 1
                while (i + 1 < j and arr[i] == arr[i + 1]) :
                    left+=1
                    i+=1
                while (j - 1 > i and arr[j] == arr[j - 1]) :
                    right+=1
                    j-=1
                count += left * right
                i+=1
                j-=1
        elif(sum<traget):
                i+=1
        else:
            j-=1
 

arr=[1,4,4,5,5,5,6,6,11]
traget=11
n=len(arr)
ans=towpointer(arr,n,traget)
printf(ans)
