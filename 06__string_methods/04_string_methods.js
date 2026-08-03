
let text = "we are learning javascript ";

console.log("text =>", text);


// split => split a string into an array of substrings 


console.log("split the text with space =>", text.split("  "));

console.log("split the text without space =>", text.split(""));

console.log("split the text with the one char =>", text.split("e"));


 // substring is similar to slice there is a slit difference between them  :-
 
 
 // 1 // same 

console.log(" substrings =>", text.substring("4"));

console.log("slice =>",text.slice(3));

// 2 // in substring when we right greater number before and the small number after then it will swipe  and return // 
     // while in slice do not swipe or return anything //

     console.log(" substrings =>", text.substring("5,1"));


     console.log("slice =>",text.slice(5,1));

 // 3 // in substring when we give 0 or less then 0 it will return the full string //
      // while in slice the -1 or - one will give the return from the end of the string //

       console.log(" substrings =>", text.substring("-1"));

       console.log("slice =>",text.slice(-1))



      // tolowerCase =>	Returns a string converted to lowercase letters//

console.log("lowercase op =>", text.toLowerCase());

     // toupperCase => Returns a string converted to uppercase letters//

console.log("upper case op =>", text.toUpperCase());

    // trim => removes the whitespace from the text from both the side //

    Text = "            hello               ";
 
    console.log("length op text for trim =>", Text.length);

    console.log("trim =>",Text.trim().length);

   