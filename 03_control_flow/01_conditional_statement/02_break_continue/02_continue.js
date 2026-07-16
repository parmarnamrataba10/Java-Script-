

// The continue statement is used to skip the current iteration of a loop when a specified condition is true and immediately move to the next iteration of the loop. //

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        continue;
    }

    console.log(i);
}

             //  2  // 



let students = ["Nairobi", "Denver", "Tokyo", "Berlin", "Moscow"];

for (let i = 0; i < students.length; i++) {

    if (students[i] === "Tokyo") {
        continue;
    }

    console.log(students[i]);
}        

          // 3 // 

  

for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}        
