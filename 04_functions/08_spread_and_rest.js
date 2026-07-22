
// spread and rest are short-hand porperty for array    .

// spread 

// spread is use to make the copy of array 

//  example 

let numArray = [1, 2, 3, 4, 5];
console.log(...numArray);


const fruits = ["apple", "banana", "cherry", "mango", "watermelon", "litchi"];

const shopItems = [...fruits];

shopItems.push("strawberry");

console.log("fruits", fruits);

console.log("shopItems", shopItems);

const person = [
  {
    name: "adane",
    city: "bvn",
  },
  {
    name: "priya",
    city: "bvn",
  },
];

const personList = [...person];

console.log("person list", personList);

   //example 2 //


   const colors = ["red", "blue", "green"];

const allColors = [...colors];

allColors.push("yellow");

console.log("Original Colors:", colors);
console.log("New Colors:", allColors);





   // example 3 //

const student = {
  name: "Rahul",
  age: 20,
};

const studentInfo = {
  ...student,
  city: "Surat",
};

console.log(student);
console.log(studentInfo);

// rest example

function game(...game){

    console.log(" i am playing " ,...game)
    console.log(" my fav game is " ,game[3])


}

game("clash royals","plato","purple place ","stumble guys")


// example 2 //

function subjects(...subject) {

    console.log("My Subjects:", ...subject);

    console.log("First Subject:", subject[0]);

    console.log("Total Subjects:", subject.length);

}

subjects("JavaScript", "React", "Node", "MongoDB");


   // example 3 //

   function shopping(...items) {

    console.log("Shopping Items:", ...items);

    console.log("Last Item:", items[items.length - 1]);

    console.log("Number of Items:", items.length);

}

shopping("Milk", "Bread", "Butter", "Chocolate", "Juice");