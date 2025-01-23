function foo(a, b) {
  return a + b;
}

function bar(a, b) {
  return a - b;
}

console.log(foo(1, 2)); // Output: 3
console.log(bar(1, 2)); // Output: -1

//The bug is that foo(1,2) should return 3 but it returns 4. 
//The bug is that bar(1,2) should return -1 but it returns 0.
//The bug is in the foo function which adds the two numbers incorrectly and bar function subtracts incorrectly. 