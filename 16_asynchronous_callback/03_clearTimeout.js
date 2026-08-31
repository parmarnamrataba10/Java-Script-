
// cleartimeout is use to clear the time we set by settimeout function //

// cleartimeout is also a function //

const msg = setTimeout(() => {
  console.log("hello");
}, 5000);

clearTimeout(msg);

// example 2 //

const msg1= setTimeout(() => {

  console.log("Hello");

}, 2000);

setTimeout(() => {

  clearTimeout(msg1);

}, 3000);

// example 3 //


const welcome = setTimeout(() => {

  console.log("Welcome!");

}, 2000);

setTimeout(() => {

  clearTimeout(welcome);

}, 3000);