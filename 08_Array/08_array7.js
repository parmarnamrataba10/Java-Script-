


// some() method  //

// This method returns true if one or more elements match the given condition.

let temperatures = [18, 22, 27, 30, 16, 19];

let hotDay = temperatures.some((x) => {
    return x > 25;
});

console.log("temperature above 25 ->", hotDay);


// every() method //

// This method returns true only when every element follows the given condition.

let prices = [100, 250, 400, 550];

let validPrice = prices.every((x) => {
    return x >= 100;
});

console.log("all prices are 100 or more ->", validPrice);


// reverse() method  //

// This method changes the array by arranging its elements from last to first.

let months = ["Jan", "Feb", "Mar", "Apr", "May"];

console.log("reverse ->", months.reverse());


// example-1

// some() method // 

// checks whether any product costs more than 1000

let products = [450, 700, 1200, 900, 650];

let expensive = products.some((x) => {
    return x > 1000;
});

console.log("any product above 1000 ->", expensive);


// every() method //

// checks whether every player scored at least 10 runs

let runs = [15, 28, 34, 19, 12];

let minimumRuns = runs.every((x) => {
    return x >= 10;
});

console.log("all players scored at least 10 ->", minimumRuns);


// reverse() method  //

let fruits = ["Apple", "Banana", "Orange", "Mango"];

console.log("original fruits ->", fruits);

console.log("reverse ->", fruits.reverse());

console.log("fruits after reverse ->", fruits);


// example-2 //

// some() method //

let salaries = [12000, 18000, 25000, 30000];

let highSalary = salaries.some((x) => {
    return x >= 25000;
});

console.log("salary is 25000 or more ->", highSalary);


// every() method //

let evenNumbers = [2, 4, 6, 8, 10];

let allEven = evenNumbers.every((x) => {
    return x % 2 === 0;
});

console.log("all numbers are even ->", allEven);


// reverse() method //

let letters = ["A", "B", "C", "D", "E"];

console.log("letters ->", letters);

console.log("reverse ->", letters.reverse());


// example-3 //

// some() method //

let heights = [140, 150, 155, 170, 165];

let tallPerson = heights.some((x) => {
    return x >= 170;
});

console.log("at least one person is 170 cm or taller ->", tallPerson);


// every() method //

let stock = [5, 8, 10, 3, 7];

let available = stock.every((x) => {
    return x > 0;
});

console.log("all items are in stock ->", available);


// reverse() method //

let colors = ["Red", "Blue", "Green", "Yellow"];

console.log("color list ->", colors);

console.log("reverse ->", colors.reverse());