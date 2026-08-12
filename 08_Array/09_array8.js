


// indexOf() method //

// This method helps us locate the position of a specific value inside an array. //

const cities = [
    "Ahmedabad",
    "Surat",
    "Rajkot",
    "Vadodara",
    "Bhavnagar",
    "Junagadh",
    "Gandhinagar"
];

console.log("position of Rajkot ->", cities.indexOf("Rajkot"));

console.log(
    "position of Mumbai which is not present in this array ->",
    cities.indexOf("Mumbai")
);

// example-1 //

// indexOf() method //

// It returns the position number where the given element is found in the array. //

const animals = [
    "Lion",
    "Tiger",
    "Elephant",
    "Horse",
    "Monkey",
    "Zebra"
];

console.log("position of Horse ->", animals.indexOf("Horse"));

console.log(
    "position of Dog which is not present in this array ->",
    animals.indexOf("Dog")
);

// example-2 //

// indexOf() method //

// This method searches for an element and gives its index value if it exists. //

const laptops = [
    "Dell",
    "HP",
    "Lenovo",
    "Asus",
    "Acer",
    "Apple"
];

console.log("position of Asus ->", laptops.indexOf("Asus"));

console.log(
    "position of Sony which is not present in this array ->",
    laptops.indexOf("Sony")
);

// example-3 //

// indexOf() method //

// It tells us the index of the first matching element in the array. //

const sports = [
    "Cricket",
    "Football",
    "Hockey",
    "Tennis",
    "Badminton",
    "Basketball"
];

console.log("position of Tennis ->", sports.indexOf("Tennis"));

console.log(
    "position of Volleyball which is not present in this array ->",
    sports.indexOf("Volleyball")
);