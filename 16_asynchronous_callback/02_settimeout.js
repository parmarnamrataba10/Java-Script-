
// The setTimeout() method executes a block of code after the specified time //

// this method is executes only onces //

//syntax:- setTimeOut(function,time) //
 
const currentYear = () => {
  console.log("checking current Year");

  setTimeout(() => {
    let currentYear = new Date().getFullYear();
    console.log("current Year: ", currentYear);
  }, 5000);
};

currentYear();

// example 2 //

const welcome = () => {
  console.log("Welcome function ");

  setTimeout(() => {
    console.log("Welcome to JavaScript!");
  }, 3000);
};

welcome(); 

// example 3 //

function greet(name) {
  setTimeout(() => {
    console.log("Hello " + name);
  }, 2000);
}

greet("Namrata");