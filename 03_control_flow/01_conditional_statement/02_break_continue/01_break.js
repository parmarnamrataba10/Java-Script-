

//The break statement is used to immediately stop (terminate) the execution of a loop or switch statement//

let student = ["nairobi", "denver", "tokyo", "berlin", "moscow", "helsinki", "oslo", "rio"];

for (let i = 0; i < student.length; i++) {

    console.log(student[i]);

    if (i === 3) {

        console.log("found", student[i])
        break;
    }
}

                 // 2 //



let numbers = [5, 10, 15, 20, 25, 30];

for (let i = 0; i < numbers.length; i++) {

    console.log(numbers[i]);

    if (numbers[i] === 20) {

        console.log("Number Found:", numbers[i]);

        break;
    }
}                 

                 // 3 //


let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

for (let i = 0; i < fruits.length; i++) {

    console.log(fruits[i]);

    if (fruits[i] === "Orange") {

        console.log("Fruit Found:", fruits[i]);

        break;
    }
}               