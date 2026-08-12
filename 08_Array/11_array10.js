
// find //


// The find method returns the first element that matches the given condition, while findIndex() returns the position of the first matching element.

// find method //

const prices = [120, 450, 80, 300, 650, 90, 200, 500];

let result = prices.find((price) => price > 400);

console.log("first price greater than 400 is =>", result);

// findIndex method //

let index = prices.findIndex((price) => price > 400);

console.log("index of first price greater than 400 is =>", index);

// example-1 //

// find method //

const heights = [150, 165, 172, 160, 180, 155];

let result = heights.find((height) => height > 170);

console.log("first height greater than 170 is =>", result);

// findIndex  method //


let index = heights.findIndex((height) => height > 170);

console.log("index of first height greater than 170 is =>", index);

// example-2 //

// find method //

const temperatures = [18, 22, 25, 30, 16, 28];

let result = temperatures.find((temp) => temp >= 28);

console.log("first temperature greater than or equal to 28 is =>", result);

// findIndex  method //



let index = temperatures.findIndex((temp) => temp >= 28);

console.log("index of first temperature greater than or equal to 28 is =>", index);

// example-3

// find method //


const salaries = [15000, 22000, 18000, 35000, 28000, 12000];

let result = salaries.find((salary) => salary > 30000);

console.log("first salary greater than 30000 is =>", result);

// findIndex  method // 


let index = salaries.findIndex((salary) => salary > 30000);

console.log("index of first salary greater than 30000 is =>", index);