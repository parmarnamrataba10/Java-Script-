

//A do...while loop is used to execute a block of code at least once, and then it continues to execute as long as the specified condition is true.//

// do...while loop prints numbers from 1 to 10.

let i = 1;

do {

    console.log(i);

    i++;

} while (i <= 10);


     // 2// 

     // do...while loop prints all student names.

let students = ["Nairobi", "Denver", "Tokyo", "Berlin", "Moscow"];

let i = 0;

do {

    console.log(students[i]);

    i++;

} while (i < students.length);


   //3//

 // do...while loop is used to calculate the sum of numbers from 1 to 5.

let i = 1;
let sum = 0;

do {

    sum = sum + i;

    i++;

} while (i <= 5);

console.log("Total Sum =", sum);  