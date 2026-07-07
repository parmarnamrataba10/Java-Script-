// const is also block scoped.
// We must initialize a const variable at the time of declaration.
// After that, its value cannot be changed.

function collegeName() {

  const college = "SSCCM";

  // print 

  console.log("College Name is:", college);
}

collegeName();

// reinitializing is not possiable in this it will show error

// college = "Red & White"; // error

// console.log("College Name is:", college);

// const city; // error

// city = "Rajkot";

// console.log(" city is:", city );'



// 2// 



function companyName() {

  const company = "Google";

  // print
  console.log("Company Name is:", company);
}

companyName();


// company = "Microsoft"; // Error

// console.log("Company Name is:", company);

// A const variable must be initialized at the time of declaration.

// const office; // Error

// office = "Ahmedabad";

// console.log("Office is:", office);'


//3 //



function countryName() {

  const country = "India";

  // print
  console.log("Country Name is:", country);
}

countryName();



// country = "Canada"; // Error

// console.log("Country Name is:", country);

// const state; // Error

// state = "Gujarat";

// console.log("State is:", state);