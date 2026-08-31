
// The setInterval() method repeats a block of code at every given timing event.//

//syntax :- setInterval(function,time)//



function currentTime() {
  let Time = new Date().toLocaleTimeString();

  console.log(" time is :", Time);
}

setInterval(currentTime, 1000);

// example 2 //

function message() {
  console.log("Hello, JavaScript!");
}

setInterval(message, 2000);

// example 3 //

function showName() {
  console.log("Namrata");
}

setInterval(showName, 2000);