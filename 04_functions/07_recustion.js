

// Factorial using recursion

function factorial(num) {
  if (num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

console.log(factorial(5)); 


   // example 2 //

   // Find the sum of numbers from 1 to n

function sum(n) {
  if (n === 1) {
    return 1;
  }

  return n + sum(n - 1);
}

console.log(sum(5)); 


   // example 3 //

   // Find sum of numbers using recursion

function sum(num) {
  if (num === 1) {
    return 1;
  }

  return num + sum(num - 1);
}

console.log(sum(5));