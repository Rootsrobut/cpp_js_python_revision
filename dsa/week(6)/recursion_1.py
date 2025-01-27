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