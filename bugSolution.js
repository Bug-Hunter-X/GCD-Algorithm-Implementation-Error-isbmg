function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function foo(a, b) {
  return gcd(a, b) === 1;
}

console.log(foo(100, 20)); // false
console.log(foo(100, 1)); // true
console.log(foo(15, 10));//false
console.log(foo(20, 10)); // false
console.log(foo(100, 10)); //false