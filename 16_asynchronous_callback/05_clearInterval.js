
//the program executes a block of code at every specified time interval. / the program executes a block of code at every specified time interval. //

const timer  = setInterval(() => {
  let time = new Date().toLocaleTimeString();

  console.log("time-", time);
}, 1000);

setTimeout(() => {
  clearInterval(timer);
}, 5000);

// example 2 //

const stop = setInterval(() => {

  console.log("Hello");

}, 1000);

setTimeout(() => {

  clearInterval(stop);

}, 3000);

// example -3 //

const print  = setInterval(() => {

  console.log("Number-", 10);

}, 2000);

setTimeout(() => {

  clearInterval(print);

}, 6000);