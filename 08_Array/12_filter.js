

// filter method //

// The filter  method selects elements from an array according to a specified condition and returns the matching elements in a new array. //

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(number);

const evenNumber = number.filter((num) => num % 2 == 0);

console.log(evenNumber);

const oddNumber = number.filter((n) => n % 2 == 1);

console.log(oddNumber);


const personDetails = [
  { name: "John Smith", age: 45, city: "New York", profession: "Engineer" },
  {
    name: "Emily Davis",
    age: 45,
    city: "Los Angeles",
    profession: "Graphic Designer",
  },
  { name: "Michael Brown", age: 67, city: "Chicago", profession: "Doctor" },
  { name: "Sophia Wilson", age: 22, city: "Houston", profession: "Teacher" },
  {
    name: "David Martinez",
    age: 38,
    city: "San Francisco",
    profession: "Developer",
  },
];

const PeopleAge = personDetails.filter((people) => people.age > 40);

console.log("people age is greater than 40", PeopleAge);

const PeopleName = personDetails
  .filter((people) => people.age > 40)
  .map((people) => people.name);

console.log(" names ", PeopleName);


// example-1 //


const marks = [25, 45, 60, 32, 75, 80, 20, 90];

console.log("marks", marks);

const passingMarks = marks.filter((mark) => mark >= 40);

console.log("marks", passingMarks);


// example-2 //


const products = [
  { name: "Laptop", price: 55000 },
  { name: "Mouse", price: 800 },
  { name: "Keyboard", price: 1500 },
  { name: "Monitor", price: 12000 },
  { name: "Headphones", price: 2500 },
];

const expensiveProducts = products.filter((product) => product.price > 5000);

console.log("products above 5000", expensiveProducts);

const expensiveProductNames = products
  .filter((product) => product.price > 5000)
  .map((product) => product.name);

console.log("names of products above 5000", expensiveProductNames);


// example-3 //


const students = [
  { name: "Aarav", marks: 85, course: "BCA" },
  { name: "Riya", marks: 62, course: "BBA" },
  { name: "Karan", marks: 45, course: "BCA" },
  { name: "Meera", marks: 91, course: "B.Com" },
  { name: "Raj", marks: 35, course: "BCA" },
];

const selectedStudents = students.filter((student) => student.marks >= 60);

console.log("students", selectedStudents);

const selectedStudentNames = students
  .filter((student) => student.marks >= 60)
  .map((student) => student.name);

console.log(" names ", selectedStudentNames);

