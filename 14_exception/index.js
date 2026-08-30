

// without exception

function checkPin(pin) {
  let atmPin = 1234;

  if (atmPin != pin) 
    {
    console.log("invalid pin");
  } else 
    {
    console.log("Welcome to XYZ bank ");
  }

  console.log("Do you want to explore more ?");
}
checkPin(4567)

// now with exception //

// function checkPin(pin) {
//   let atmPin = 1234;

//   try {
//     if (atmPin != pin) {
//       throw " invalid pin ";
//     }

//     console.log("Welcome to XYZ bank .");
//     console.log("do you want to explore more ?");
//   } catch (error) {
//     console.log(error);
//   }
// }

// checkPin(4567);

// now with exception finally //

// function checkPin(pin) {
//   let atmPin = 1234;

//   try {
//     if (atmPin != pin)
//          {
//       throw " invalid pin ";
//     }
//   } catch (error) {
//     console.log(error);
//   }
//    finally 
//    {
//     console.log("welcome to XYZ bank .");
//   }

//   console.log("do you want to explore more ?");
// }

// checkPin(4567);