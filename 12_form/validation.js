
const form = document.getElementById("registrationForm");

const name = document.getElementById("name");

const email = document.getElementById("email");

const password = document.getElementById("password");

const message = document.getElementById("message");


form.addEventListener("submit", (event) => {

    event.preventDefault();


    if (name.value === "") {

        message.innerText = "Please enter your name";
        message.style.color = "red";
    }

    else if (name.value.length === 1) {

        message.innerText = "A single letter cannot be a name";
        message.style.color = "red";
    }

    else if (email.value === "") {

        message.innerText = "Please enter your email";
        message.style.color = "red";
    }

    else if (password.value === "") {

        message.innerText = "Please enter your password";
        message.style.color = "red";
    }

    else if (password.value.length < 6) {

        message.innerText = "Password must be at least 6 characters";
        message.style.color = "red";
    }

    else {

        message.innerText = "Form submitted successfully!";
        message.style.color = "green";

        console.log("Name:", name.value);

        console.log("Email:", email.value);

        console.log("Password:", password.value);

    }

});