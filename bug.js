function foo(a, b) {
  if (a === b) {
    return true; 
  }
  if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(100, 20)); // true
console.log(foo(100, 1)); // false
console.log(foo(15, 10));//true
console.log(foo(20, 10)); // true
console.log(foo(100, 10)); //false