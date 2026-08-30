
// callback is function passed as an argument to another function //
// using callback we can do asynchronous task in js
// a callback function it runs after another function has finished
// when you pass functions as an arguments don't use parenthesis

function greet(name) {
  console.log("starting.....");
}

function greetings(name, greet) {
  let msg = `Hyy ${name}, good morning...`;

  greet(name);
  console.log(msg);
}

greetings("niki", greet);

// example 2 //
 
function login(name) {
    console.log("Checking login.....");
}

function userLogin(name, callback) {
    let msg = `Hyy ${name}, you are successfully logged in...`;

    callback(name);

    console.log(msg);
}

userLogin("Niki", login);