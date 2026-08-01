

// String is a sequence (collection) of characters.

let text = "we are learning javascript";

console.log("text =>", text);

// charAt() method ==> returns the character present at the specified index (position).

console.log("char at =>", text.charAt(8));

// concat() method ==> combines two or more strings and returns a new joined string.

console.log("joint strings =>", text.concat(" string methods"));

// endsWith() method ==> checks whether the string ends with the specified value and returns true or false.

console.log("ends with =>", text.endsWith("s"));
console.log("ends with =>", text.endsWith("t"));

// includes() method ==> checks if the given value exists in the string and returns true or false.

console.log("includes =>", text.includes("e"));

// indexOf() method ==> returns the index of the first occurrence of the specified character or value.

console.log("index position of =>", text.indexOf("v"));

// lastIndexOf() method ==> returns the index of the last occurrence of the specified character or value.

console.log("last index of =>", text.lastIndexOf("s"));

// length property ==> returns the total number of characters in the string.

console.log("length of =>", text.length);