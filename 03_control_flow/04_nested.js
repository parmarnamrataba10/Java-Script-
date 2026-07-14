
//A Nested if statement is an if statement inside another if statement. The inner if statement is checked only if the outer if condition is true.//


let age = 20;
let License = true;

if (age >= 18) {
    if (License) {
        console.log("You can drive.");
    }
}

           // 2 //

let registered = true;
let feesPaid = true;

if (registered) {

    if (feesPaid) {

        console.log("You can appear for the exam.");

    }

}           
 
            // 3 //

  let hasCard = true;
let correctPin = true;

if (hasCard) {
    if (correctPin) {
        console.log("You can withdraw money.");
    }
}          