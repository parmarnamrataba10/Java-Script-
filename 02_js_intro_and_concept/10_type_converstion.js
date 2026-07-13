

// type conversion is the process of converting data of one type to another //

// There are two types of type conversion . //

// Implicit Conversion:- compiler converts //
// Explicit Conversion -  we users converts //


          // String to Number //
              let result1 = "9" - 2; 
              console.log(result1); 

              let result1 = "20" - 5;
              console.log(result1); 

              let result1 = "80" / 4;
              console.log(result1);

          // Number to String //
             let result2 = "7" + 9; 
             console.log(result2);

             let result2 = "JavaScript " + 2026;
             console.log(result2);

             let result2 = "50" + 10;
             console.log(result2);

          // Boolean to Number //
             let result3 = true + 1; 
             console.log(result3); 

             let result3 = false + 5;
            console.log(result3); 

            let result3 = true + true;
            console.log(result3);

          // Null to Number //
            let result4 = null + 1; 
            console.log(result4); 

            let result4 = 25 + null;
            console.log(result4);
 

            let result4 = null + 10;
            console.log(result4);


          // Undefined to Number //
           let result5 = undefined + 0; 
           console.log(result5); 

           let result5 = undefined + 5;
         console.log(result5);

         let result5 = 10 * undefined;
         console.log(result5);

                                                                // Explicit Conversion //

            // String to Number Conversion //
       let str = "31";
       let num = Number(str); 
       console.log(num); 
       console.log(typeof num); 

       let str = "450";
       let num = Number(str);

      console.log(num);          
      console.log(typeof num);

      let str = "100";
      let num = Number(str);

      console.log(num);         
      console.log(typeof num); 

           // Using parseInt() or parseFloat() //
     let decimalStr = "31.10";
     console.log(parseInt(decimalStr)); 
     console.log(parseFloat(decimalStr));

     let decimalStr = "45.75";

   console.log(parseInt(decimalStr));  
  console.log(parseFloat(decimalStr));

  let decimalStr = "99.99";

console.log(parseInt(decimalStr));   
console.log(parseFloat(decimalStr));

          // Number to String Conversion //
       let number = 123;
       let strNum = String(number); 
      console.log(strNum); 
      console.log(typeof strNum);

      let number = 999;
      let strNum = String(number);

     console.log(strNum);      
   console.log(typeof strNum);

   let number = 500;
   let strNum = String(number);

  console.log(strNum);     
console.log(typeof strNum);
