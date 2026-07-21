

//  IIFE (Immediately Invoked Function Expression) is a function that runs immediately after its declaration.


(function iife() {
  console.log("this is an immediate invoke function expression");
})();

// example 2

(function greet(name) {
  console.log("Hello,", name);
})("Namrataba");

// example 3

(function (a, b) {
  console.log("Sum =", a + b);
})(15, 25);