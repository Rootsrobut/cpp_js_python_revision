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
