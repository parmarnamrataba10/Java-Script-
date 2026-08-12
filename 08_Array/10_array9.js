

// includes() method //


//  This method checks if a particular value exists inside an array or not. //

const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "pink",
    "black",
    "white"
];

console.log("blue is available ->", colors.includes("blue"));
console.log("purple is available ->", colors.includes("purple"));

// example-1 //

// includes() method //



let mobileBrands = ["Samsung", "Apple", "Vivo", "Oppo"];

console.log("Vivo is available ->", mobileBrands.includes("Vivo"));
console.log("Nokia is available ->", mobileBrands.includes("Nokia"));

// example-2 //

// includes() method //


let languages = ["C", "C++", "Java", "Python"];

console.log("Java is available ->", languages.includes("Java"));
console.log("PHP is available ->", languages.includes("PHP"));

// example-3 //

// includes() method //


let vehicles = ["Car", "Bike", "Bus", "Truck"];

console.log("Bike is available ->", vehicles.includes("Bike"));
console.log("Train is available ->", vehicles.includes("Train"));

// sort() method //

// This method arranges the elements of an array in order, usually from smaller to larger or alphabetically. //

let letters = ["f", "c", "a", "e", "b"];

console.log("alphabetical order ->", letters.sort());

// sort() number data //

let values = [9, 3, 7, 1, 8, 2, 6];

console.log("sorted values ->", values.sort());

// sort the numbers in ascending order //

console.log("ascending order ->", values.sort((a, b) => a - b));

// sort the numbers in descending order //

const descendingValues = values.sort((a, b) => {
    return b - a;
});

console.log("descending order ->", descendingValues);

// example-1 //

let fruits = ["orange", "apple", "mango", "banana"];

console.log("alphabetical order ->", fruits.sort());

// example-2 //



let scores = [67, 25, 89, 43, 12];

console.log("ascending order ->", scores.sort((a, b) => a - b));

// example-3//

let salaries = [25000, 15000, 40000, 30000, 20000];

console.log("descending order ->", salaries.sort((a, b) => b - a));