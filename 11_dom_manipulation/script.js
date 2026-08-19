

const heading1 = document.getElementById("heading1");
console.log("heading1:", heading1);

const heading2 = document.getElementById("heading2");
console.log("heading2:", heading2);

const heading3 = document.getElementById("heading3");
console.log("heading3:", heading3);

const heading4 = document.getElementById("heading4");
console.log("heading4:", heading4);

// we can change it by this 3 methods //

// 1 innerText //

console.log("heading3 innerText:", heading3.innerText);


// 2 innerHTML //

heading2.innerHTML = "<b>Available Courses</b>";


// 3 textContent //

console.log("heading3 textContent:", heading3.textContent);


//  Difference between innerText and textContent //

console.log("heading4 innerText:", heading4.innerText);

console.log("heading4 textContent:", heading4.textContent);

// for class we have to use :-

// getElementsByClassName //

const className = document.getElementsByClassName("className");

console.log("className", className);

// for tag we have to use :-

// getElementsByTagName //

const headings = document.getElementsByTagName("h6");

console.log(headings);

console.log(headings[0]);

console.log(headings[1]);
 // query selector this can be used in all class ,tag , element //


const query = document.querySelector(".query");

console.log("querySelector", query);



const selector = document.querySelector("#selector");

console.log("querySelector", selector);



const queryAll = document.querySelectorAll(".para");

console.log("Query All Selector", queryAll);

console.log(queryAll[0]);

console.log(queryAll[1]); 

console.log(queryAll[2]); 


queryAll[0].innerText = "HTML Course";

queryAll[1].innerText = "JavaScript Course";

queryAll[2].innerText = "React Course";


// forEach

const para = document.querySelectorAll(".para");

queryAll.forEach((element) => {
  console.log(element.innerText);
});

//  to createElement //

const para1 = document.createElement("p");

para1.innerText = "Start learning JavaScript today";

document.body.appendChild(para1);


// Style //

para1.style.color = "blue";

heading1.style.color = "green";
