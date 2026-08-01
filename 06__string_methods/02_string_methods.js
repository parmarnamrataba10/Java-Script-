

// String is a sequence (collection) of characters.

let text = "we are learning javascript ";

console.log("text =>", text);

// match() method ==> searches the string for a specified value or regular expression and returns the matched result.

console.log("find the match =>", text.match("java"));

// repeat() method ==> creates and returns a new string by repeating the original string the specified number of times.

console.log("repeat =>", text.repeat(2));

// replace() method ==> searches for the first matching value and returns a new string with that match replaced.

console.log("replace =>", text.replace("e", "E"));

// replaceAll() method ==> searches for all matching values and returns a new string with every match replaced.

console.log("replace all =>", text.replaceAll("e", "E"));

// search() method ==> searches for a specified value or regular expression and returns the index of the first match.

console.log("search =>", text.search("p"));

// search() does not allow a starting index.
// If you want to search from a specific position, use indexOf() instead.

console.log("indexOf =>", text.indexOf("s", 6));

// console.log("indexOf =>", text.indexOf(9));

// slice() method ==> extracts a portion of the string and returns it as a new string without changing the original string.

console.log("text =>", text);

console.log("sliced text =>", text.slice(2));

console.log("sliced text =>", text.slice(5, 10));

console.log("sliced text =>", text.slice(-1));