

// let has  block scoped .



function currentActivity() {

  // declaration 

  let activity;

  //initialize 

  activity = "running";

  // print 

  console.log(" activity :-", activity);

  if (true) {
    console.log("activity :-", activity);
  }
}

currentActivity();  


function gaming() {

  // declaration 

  let game;

  //initialize 

  game = "gta-5";

// print 

  console.log(" i am playing", game);

  if (true) {

    console.log("i am playing", game);

  }
}
gaming();

let game ;

//reinitialize 
 
game = "vice city ";

console.log(" i am playing", game);

// redeclaring is not possiable in let it will give error 

// we can redeclare but not in same scope , do redeclare the scop should be different 




 // 2 //

 

function favoriteSubject() {

  // declaration
  let subject;

  // initialize
  subject = "JavaScript";

  // print
  console.log("Favorite Subject :-", subject);

  if (true) {
    console.log("Inside block :-", subject);
  }
}

favoriteSubject();

let subject;

// reinitialize
subject = "C++";

console.log("Favorite Subject :-", subject);


//3 //



function mobileDetails() {

  // declaration
  let mobile;

  // initialize
  mobile = "Samsung";

  // print
  console.log("Mobile Brand :-", mobile);

  if (true) {
    console.log("Inside block :-", mobile);
  }
}

mobileDetails();

let mobile;

// reinitialize
mobile = "Apple";

console.log("Mobile Brand :-", mobile);

