

const fruits = ["apple", "banana", "cherry", "dragon fruit", "orange", "mango"];

console.log("fruits", fruits);

for (let i = 1; i < fruits.length; i++) {
  console.log("fruits ->", fruits[i]);
}

// for of

for (let fruit of fruits) {
  console.log("fruits ->", fruit);
}

// for each 

let numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.forEach((n)=>{
    console.log(2*n);
});

// concat method

const vegetables = ["potato","tomato","onion","Carrot","Spinach"]

const shopItems = [...fruits].concat(vegetables)

console.log("shop items",shopItems)

console.log("vegetables ",vegetables)

// to string method 

console.log("shop items ->",shopItems.toString())


// example-1 //

const fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

console.log("fruits", fruits);

// for loop
for (let i = 1; i < fruits.length; i++) {
    console.log("fruit ->", fruits[i]);
}

// for of
for (let fruit of fruits) {
    console.log("fruit ->", fruit);
}

// forEach
let prices = [10, 20, 30, 40, 50];

prices.forEach((price) => {
    console.log(price + 10);
});

// concat method
const vegetables = ["Potato", "Tomato", "Onion", "Carrot"];

const groceryList = [...fruits].concat(vegetables);

console.log("grocery list", groceryList);

console.log("vegetables", vegetables);

// toString method
console.log("grocery list ->", groceryList.toString());



// example- 2 //

const cities = ["Ahmedabad", "Surat", "Rajkot", "Vadodara", "Bhavnagar"];

console.log("cities", cities);

// for loop
for (let i = 1; i < cities.length; i++) {
    console.log("city ->", cities[i]);
}

// for of
for (let city of cities) {
    console.log("city ->", city);
}

// forEach
let population = [100, 200, 300, 400, 500];

population.forEach((people) => {
    console.log(people * 2);
});

// concat method
const countries = ["India", "USA", "Canada", "Japan"];

const places = [...cities].concat(countries);

console.log("places", places);

console.log("countries", countries);

// toString method
console.log("places ->", places.toString());


// example-3 //

const mobiles = ["Samsung", "Apple", "Vivo", "Oppo", "OnePlus"];

console.log("mobiles", mobiles);

// for loop
for (let i = 1; i < mobiles.length; i++) {
    console.log("mobile ->", mobiles[i]);
}

// for of
for (let mobile of mobiles) {
    console.log("mobile ->", mobile);
}

// forEach
let ratings = [5, 4, 3, 2, 1];

ratings.forEach((rating) => {
    console.log(rating * 10);
});

// concat method
const laptops = ["Dell", "HP", "Lenovo", "Asus"];

const electronics = [...mobiles].concat(laptops);

console.log("electronics", electronics);

console.log("laptops", laptops);

// toString method
console.log("electronics ->", electronics.toString());



