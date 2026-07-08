

// there are 8 data types

// 1. String
// 2. Number
// 3. BigInt
// 4. Boolean   
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// there are two-category of :-
// 1- primitive .
// 2- non-primitive .

//1.primitive = stored in stack , immuted (cannot be changed ), passed by value , has its own indendity ..


// string //

let country = "India";
let newCountry = country;

console.log("before change ", country);
console.log("before change ", newCountry);

newCountry = "Canada";

console.log("after change ", country);
console.log("after change ", newCountry);

//number//

let marks = 85;
let totalMarks = marks;

console.log("before change ", marks);
console.log("before change ", totalMarks);

totalMarks = 95;

console.log("after change ", marks);
console.log("after change ", totalMarks);


//boolean// 

let isLoggedIn = false;
let userStatus = isLoggedIn;

console.log("before change ", isLoggedIn);
console.log("before change ", userStatus);

userStatus = true;

console.log("after change ", isLoggedIn);
console.log("after change ", userStatus);


// bigint

let bigNumber = 1234567890123456789012345678901234567890n;
let bigNumberCopy = bigNumber;

console.log("before change ", bigNumber);
console.log("before change ", bigNumberCopy);

bigNumberCopy = 9999999999999999999999999999999999999999n;

console.log("after change ", bigNumber);
console.log("after change ", bigNumberCopy);


// null 

let student = null;
let studentCopy = student;

console.log("before change ", student);
console.log("before change ", studentCopy);

studentCopy = "Rahul";

console.log("after change ", student);
console.log("after change ", studentCopy);


// undefine 

let city;
let cityCopy = city;

console.log("before change ", city);
console.log("before change ", cityCopy);

cityCopy = "Surat";

console.log("after change ", city);
console.log("after change ", cityCopy);


// symbol 

let id = Symbol("user");
let idCopy = id;

console.log("before change ", id);
console.log("before change ", idCopy);

idCopy = Symbol("admin");

console.log("after change ", id);
console.log("after change ", idCopy);



//2.non-primitive = stored in heap , muted (can be changed ), passed by reference .



//object 

let studentObj = { name: "Rahul", grade: "A" };
let studentObjCopy = studentObj;

console.log("before change ", studentObj);
console.log("before change ", studentObjCopy);

studentObjCopy.grade = "A+";

console.log("after change ", studentObj);
console.log("after change ", studentObjCopy);


//2//

let book = { title: "JavaScript", pages: 250 };
let bookCopy = book;

console.log("before change ", book);
console.log("before change ", bookCopy);

bookCopy.pages = 300;

console.log("after change ", book);
console.log("after change ", bookCopy);


//3//

let employee = { name: "Amit", salary: 30000 };
let employeeCopy = employee;

console.log("before change ", employee);
console.log("before change ", employeeCopy);

employeeCopy.salary = 45000;

console.log("after change ", employee);
console.log("after change ", employeeCopy);



