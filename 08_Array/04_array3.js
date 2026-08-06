


let fruits=["apple","banana","charry", "dates","elderBarry","fig"]

console.log("fruits",fruits)

// adding //

fruits.push("pineapple")

console.log("fruits  ",fruits)

// adding from start //

fruits.unshift("kiwi")

console.log("fruits adding  first ",fruits)

// removing from first // 
fruits.shift()

console.log("fruits removing  first ",fruits)


// splice is use to repalce or add or remove //


// remove //

fruits.splice(2,0,"guava","cherry")

console.log("splice" , fruits)

// add //


fruits.splice(2,4,"muskmelon","watermelon")

console.log("fruits after " , fruits)


// example-1

let cars = ["BMW", "Audi", "Toyota", "Honda"];

console.log("Cars:", cars);

// Add element at last
cars.push("Hyundai");
console.log("After push:", cars);

// Add element at first
cars.unshift("Mercedes");
console.log("After unshift:", cars);

// Remove last element
cars.pop();
console.log("After pop:", cars);

// Remove first element
cars.shift();
console.log("After shift:", cars);

// Add elements without removing
cars.splice(1, 0, "Kia", "MG");
console.log("After splice (add):", cars);

// Replace elements
cars.splice(2, 2, "Tesla", "Ford");
console.log("After splice (replace):", cars);


// example-2

let countries = ["India", "USA", "Japan", "Canada"];

console.log("Countries:", countries);

// Add element at last
countries.push("Australia");
console.log("After push:", countries);

// Add element at first
countries.unshift("Brazil");
console.log("After unshift:", countries);

// Remove last element
countries.pop();
console.log("After pop:", countries);

// Remove first element
countries.shift();
console.log("After shift:", countries);

// Add elements without removing
countries.splice(2, 0, "Germany", "France");
console.log("After splice (add):", countries);

// Replace elements
countries.splice(1, 2, "Italy", "Spain");
console.log("After splice (replace):", countries);


// example-3

let animals = ["Lion", "Tiger", "Elephant", "Deer"];

console.log("Animals:", animals);

// Add element at last
animals.push("Zebra");
console.log("After push:", animals);

// Add element at first
animals.unshift("Bear");
console.log("After unshift:", animals);

// Remove last element
animals.pop();
console.log("After pop:", animals);

// Remove first element
animals.shift();
console.log("After shift:", animals);

// Add elements without removing
animals.splice(1, 0, "Fox", "Wolf");
console.log("After splice (add):", animals);

// Replace elements
animals.splice(2, 2, "Rabbit", "Monkey");
console.log("After splice (replace):", animals);