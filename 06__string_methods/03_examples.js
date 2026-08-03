

// examples of all strings methods //

// charAt() examples

// 1

let str1 = "Developer";

console.log(str1.charAt(2));

// 2

let str2 = "Keyboard";

console.log(str2.charAt(5));


// concat() examples

// 1

let first1 = "Good";
let second1 = " Morning";

console.log(first1.concat(second1));

// 2

let word1 = "Front";
let word2 = "End";

console.log(word1.concat(word2));


// endsWith() examples

// 1

let text1 = "Java";

console.log(text1.endsWith("va"));

// 2

let text2 = "Notebook";

console.log(text2.endsWith("book"));


// includes() examples

// 1

let text3 = "Learning JavaScript";

console.log(text3.includes("Java"));

// 2

let text4 = "OpenAI ChatGPT";

console.log(text4.includes("GPT"));


// indexOf() examples

// 1

let text5 = "Elephant";

console.log(text5.indexOf("p"));

// 2

let text6 = "Database";

console.log(text6.indexOf("a"));


// lastIndexOf() examples

// 1

let text7 = "success";

console.log(text7.lastIndexOf("s"));

// 2

let text8 = "committee";

console.log(text8.lastIndexOf("t"));


// length examples

// 1

let text9 = "Coding";

console.log(text9.length);

// 2

let text10 = "Java Programming";

console.log(text10.length);


// match() examples

// 1

let text11 = "Learning HTML and CSS";

console.log(text11.match("HTML"));

// 2

let text12 = "Welcome to JavaScript";

console.log(text12.match("Java"));


// repeat() examples

// 1

let text13 = "Go ";

console.log(text13.repeat(4));

// 2

let text14 = "#";

console.log(text14.repeat(8));


// replace() examples

// 1

let text15 = "I like mango";

console.log(text15.replace("mango", "apple"));

// 2

let text16 = "Football";

console.log(text16.replace("o", "O"));


// replaceAll() examples

// 1

let text17 = "cat cat cat";

console.log(text17.replaceAll("cat", "dog"));

// 2

let text18 = "hello hello";

console.log(text18.replaceAll("hello", "hi"));


// search() examples

// 1

let text19 = "Full Stack Developer";

console.log(text19.search("Stack"));

// 2

let text20 = "JavaScript";

console.log(text20.search("x"));


// indexOf() with starting index examples

// 1

let text21 = "banana";

console.log(text21.indexOf("a", 4));

// 2

let text22 = "Mississippi";

console.log(text22.indexOf("i", 3));


// slice() examples

// 1

let text23 = "Technology";

console.log(text23.slice(4));

// 2

let text24 = "Programming";

console.log(text24.slice(2, 7));


// split() examples

// 1

let str1 = "HTML CSS JavaScript";

console.log(str1.split(" "));

// 2

let str2 = "apple,banana,mango";

console.log(str2.split(","));


// substring() examples

// 1

let str3 = "Programming";

console.log(str3.substring(3));

// 2

let str4 = "JavaScript";

console.log(str4.substring(8, 4));




// toLowerCase() examples

// 1

let str7 = "HELLO WORLD";

console.log(str7.toLowerCase());

// 2

let str8 = "JavaSCRIPT";

console.log(str8.toLowerCase());


// toUpperCase() examples

// 1

let str9 = "hello world";

console.log(str9.toUpperCase());

// 2

let str10 = "javaScript";

console.log(str10.toUpperCase());


// trim() examples

// 1

let str11 = "      Hello World      ";

console.log(str11.length);

console.log(str11.trim().length);

// 2

let str12 = "      JavaScript      ";

console.log(str12.length);

console.log(str12.trim().length);