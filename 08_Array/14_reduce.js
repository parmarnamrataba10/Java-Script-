
// reduce method //

//  This method processes all the elements of an array and combines them into one final result. //


const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(number);

const sumNumber = number.reduce((acc, curr) => {
  return (acc += curr);
}, 0);

console.log("sum of all is ", sumNumber);

const shoppingItems = [
  { Item: "socks", qty: 2, price: 500 },
  { Item: "shorts", qty: 5, price: 800 },
  { Item: "shoes", qty: 1, price: 5000 },
];

const total = shoppingItems.reduce((acc, curr) => {
  return (acc += curr.qty * curr.price);
}, 0);

console.log("total is ", total);


// example-1 //

const marks = [45, 60, 75, 80, 90];

console.log("marks", marks);

const totalMarks = marks.reduce((acc, curr) => {
  return (acc += curr);
}, 0);

console.log("total marks is ", totalMarks);


// example-2 //

const prices = [100, 250, 300, 150, 200];

console.log("prices", prices);

const totalPrice = prices.reduce((acc, curr) => {
  return (acc += curr);
}, 0);

console.log("total price is ", totalPrice);


// example-3 //

const cartItems = [
  { Item: "Pen", qty: 3, price: 20 },
  { Item: "Notebook", qty: 2, price: 100 },
  { Item: "Bag", qty: 1, price: 800 },
];

const cartTotal = cartItems.reduce((acc, curr) => {
  return (acc += curr.qty * curr.price);
}, 0);

console.log("total cart amount is ", cartTotal);