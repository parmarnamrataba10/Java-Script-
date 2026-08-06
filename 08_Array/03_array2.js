
let fruits=["apple","banana","charry", "dates","elderBarry","fig"]

console.log("fruits",fruits)

// accessing array form last , with length method //

console.log("last fruit",fruits[fruits.length-1])

// modify //

console.log("fruits",fruits[1])

fruits[1]="peach"

console.log("fruits after change ",fruits[1])

console.log(fruits)


// example-1 //

let cars = ["BMW", "Audi", "Toyota", "Honda", "Hyundai"];

console.log("Cars:", cars);

// last element //
console.log("Last Car:", cars[cars.length - 1]);

// Modify  //
console.log("Before Changing:", cars[4]);

cars[4] = "Mercedes";

console.log("After Changing:", cars[4]);

console.log("Updated Cars:", cars);


// example-2 //

let countries = ["India", "USA", "Canada", "Japan", "Australia"];

console.log("Countries:", countries);

//  last element //
console.log("Last Country:", countries[countries.length - 1]);

// Modify //
console.log("Before Changing:", countries[2]);

countries[2] = "Germany";

console.log("After Changing:", countries[2]);

console.log("Updated Countries:", countries); 


// example-3 //

let animals = ["Lion", "Tiger", "Elephant", "Zebra", "Deer"];

console.log("Animals:", animals);

//  last element //
console.log("Last Animal:", animals[animals.length - 1]);

// Modify //
console.log("Before Changing:", animals[3]);

animals[3] = "Giraffe";

console.log("After Changing:", animals[3]);

console.log("Updated Animals:", animals);