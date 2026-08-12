

// map method //
// The map  method creates a new array by applying a given function to every element of the original array. //


// example //

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log("numbers", numbers);

let result = numbers.map((num) => num * 2);

console.log("result", result);

const personDetails = [
  { name: "John Smith", age: 45, city: "New York", profession: "Engineer" },
  {
    name: "Emily Davis",
    age: 29,
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

console.log(
  "person Details ",
  personDetails.map((person) => person.name)
);

// example-1 //

// map  method //


let marks = [10, 20, 30, 40, 50];

console.log("marks", marks);

let updatedMarks = marks.map((mark) => mark + 5);

console.log("updated marks", updatedMarks);

// example-2 //

// map method //
// The map  method is used when we want to perform the same operation on every array element. //

let fruits = ["apple", "banana", "mango", "orange"];

console.log("fruits", fruits);

let fruitNames = fruits.map((fruit) => fruit.toUpperCase());

console.log("uppercase fruits", fruitNames);

// example-3 //

// map  method //


const students = [
  { name: "Rahul", age: 20, course: "BCA" },
  { name: "Priya", age: 21, course: "BBA" },
  { name: "Amit", age: 19, course: "BCA" },
  { name: "Neha", age: 22, course: "B.Com" },
];

console.log("students", students);

let studentNames = students.map((student) => student.name);

console.log("student names", studentNames);  

