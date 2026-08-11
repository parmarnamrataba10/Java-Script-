


const fruits = ["apple", "banana", "cherry", "dragon fruit", "orange", "mango"];

console.log("join methods => ",fruits.join(" "))

console.log("join methods => ",fruits.join(""))

// flat

let number = [[1,2,3,4] ,[5,6,7,8,9],[9,10,[11,[12,13,[14]]]]]

console.log("number",number)

console.log(number.flat(1))
console.log(number.flat(2))

console.log(number.flat(Infinity))


// slice

console.log("fruits",fruits.slice(2,6))

console.log("fruits",fruits)


  // example-1 //

  const mobiles = ["Samsung", "Apple", "Vivo", "Oppo", "OnePlus", "Xiaomi"];


console.log("join method =>", mobiles.join(" "));


console.log("join method =>", mobiles.join(""));



// flat


let mobileGroups = [
    ["Samsung", "Apple"],
    ["Vivo", "Oppo"],
    ["OnePlus", ["Xiaomi", ["Nokia", ["Motorola"]]]]
];


console.log("mobile groups", mobileGroups);


console.log(mobileGroups.flat(1));
console.log(mobileGroups.flat(2));


console.log(mobileGroups.flat(Infinity));


// slice


console.log("mobiles", mobiles.slice(2, 6));


console.log("mobiles", mobiles);


// example -2 //



const vegetables = ["Potato", "Tomato", "Onion", "Carrot", "Cabbage", "Spinach"];


console.log("join method =>", vegetables.join(" "));


console.log("join method =>", vegetables.join(""));



// flat


let vegetableGroups = [
    ["Potato", "Tomato"],
    ["Onion", "Carrot"],
    ["Cabbage", ["Spinach", ["Broccoli", ["Peas"]]]]
];


console.log("vegetable groups", vegetableGroups);


console.log(vegetableGroups.flat(1));
console.log(vegetableGroups.flat(2));


console.log(vegetableGroups.flat(Infinity));


// slice


console.log("vegetables", vegetables.slice(1, 4));


console.log("vegetables", vegetables);


// example -3 //


const sports = ["Cricket", "Football", "Tennis", "Hockey", "Basketball", "Volleyball"];


console.log("join method =>", sports.join(" "));


console.log("join method =>", sports.join(""));



// flat


let sportGroups = [
    ["Cricket", "Football"],
    ["Tennis", "Hockey"],
    ["Basketball", ["Volleyball", ["Badminton", ["Kabaddi"]]]]
];


console.log("sport groups", sportGroups);


console.log(sportGroups.flat(1));
console.log(sportGroups.flat(2));


console.log(sportGroups.flat(Infinity));


// slice


console.log("sports", sports.slice(1, 5));


console.log("sports", sports);

