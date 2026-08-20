
// Click event

const loginButton = document.getElementById("loginBtn");

loginButton.addEventListener("click", () => {

    alert("Button clicked successfully!");

    loginButton.innerText = "Clicked";

});


// Double click event

const doubleButton = document.getElementById("doubleBtn");

doubleButton.addEventListener("dblclick", () => {

    doubleButton.innerText = "You clicked twice!";

});


// Form submit event

const userForm = document.getElementById("userForm");

userForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const username = document.getElementById("username").value.trim();

    alert(`Welcome ${username}`);

});


// Mouse events

const overText = document.getElementById("overText");

overText.addEventListener("mouseover", () => {

    overText.style.color = "orange";

});


const enterText = document.getElementById("enterText");

enterText.addEventListener("mouseenter", () => {

    enterText.style.backgroundColor = "lightgreen";

});


const leaveText = document.getElementById("leaveText");

leaveText.addEventListener("mouseleave", () => {

    leaveText.style.color = "purple";

});


const moveText = document.getElementById("moveText");

moveText.addEventListener("mousemove", () => {

    moveText.style.fontSize = "25px";

});


const upText = document.getElementById("upText");

upText.addEventListener("mouseup", () => {

    upText.style.color = "blue";

});


const downText = document.getElementById("downText");

downText.addEventListener("mousedown", () => {

    downText.style.color = "red";

});


// Keyboard events

const keyDownInput = document.getElementById("keyDownInput");

keyDownInput.addEventListener("keydown", () => {

    keyDownInput.style.backgroundColor = "lightblue";

});


const keyUpInput = document.getElementById("keyUpInput");

keyUpInput.addEventListener("keyup", () => {

    keyUpInput.style.backgroundColor = "lightyellow";

});


const keyPressInput = document.getElementById("keyPressInput");

keyPressInput.addEventListener("keypress", () => {

    keyPressInput.style.color = "green";

});