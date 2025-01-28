function factorial(n) {
  if (n === 0) {
    return BigInt(1);
  }
  return BigInt(n) * factorial(n - 1);
}

console.log(factorial(104).toString());

function is_sorted(a, size) {
  if (size === 0 || size === 1) {
    return true;
  }
  if (a[0] > a[1]) {
    return false;
  }
  return is_sorted(a.slice(1), size - 1);
}
let a = [1, 2, 3, 4, 5];
console.log(is_sorted(a, a.length));




function binarysearch(arr,st,ed,key){
  let mid=Math.floor((ed-st)/2);
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


let arr1= [1, 3, 5, 7, 9, 11, 13, 15];
let n=arr1.length
let key = 7;
console.log(binarysearch(arr1, 0, n - 1,key));