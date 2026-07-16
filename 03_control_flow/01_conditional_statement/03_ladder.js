

//The else if ladder is used when there are multiple conditions to check. JavaScript checks each condition from top to bottom. As soon as one condition is true, it executes that block of code and skips the remaining conditions.//


let marks = 82;

if (marks >= 90) {

    console.log("Grade A");

} else if (marks >= 75) {

    console.log("Grade B");

} else if (marks >= 50) {

    console.log("Grade C");

} else {

    console.log("Fail");

}

            // 2 //
 let battery = 15;

if (battery >= 80) {

    console.log("Battery is Full");

} else if (battery >= 50) {

    console.log("Battery is Medium");

} else if (battery >= 20) {

    console.log("Battery is Low");

} else {

    console.log("Please Charge Your Phone");

}

             // 3 //

let role = "admin";

if (role === "owner") {

    console.log("Full Access");

} else if (role === "admin") {

    console.log("Manage Users");

} else if (role === "member") {

    console.log("View Content");

} else {

    console.log("No Access");

}