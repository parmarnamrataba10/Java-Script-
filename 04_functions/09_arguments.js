

// functions have a built-in object called the 'arguments' object, which is an array-like object.



function total() {
    
  let result = 0;

  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  console.log("result", result);
}

total(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);


  // example 2 //

  function multiply() {

    let result = 1;

    for (let i = 0; i < arguments.length; i++) {
        result *= arguments[i];
    }

    console.log("Result:", result);
}

multiply(2, 3, 4, 5);


  // example 3 //


  function largest() {

    let max = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }

    console.log("Largest Number:", max);
}

largest(45, 12, 89, 23, 67, 99, 10);