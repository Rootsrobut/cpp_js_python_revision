def factorial(n):
    if(n==0):
        return 1
    return n*(factorial(n-1))


print(factorial(1004))


def is_sorted(a, size):
  if (size == 0 or size == 1):
    return true
  if (a[0] > a[1]):
    return false
  return is_sorted(a.slice(1), size - 1)

a = [1, 2, 3, 4, 5]
console.log(is_sorted(a, len(a)))



def binarysearch(arr,st,ed,key):
  mid = st + (ed - st) // 2
  if(st>ed):
      return -1
  if(arr[mid]==key):
      return mid
  elif(arr[mid]<key):
       return binarysearch(arr,mid+1,ed,key)
  else:
       return binarysearch(arr,st,mid-1,key)

arr1= [1, 3, 5, 7, 9, 11, 13, 15]
n=len(arr1)
key = 7
print(binarysearch(arr1, 0, n - 1,key))