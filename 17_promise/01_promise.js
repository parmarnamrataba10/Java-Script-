
// To overcome callback hell, we use  Promises. //
// Promises provide a cleaner and more manageable way to handle asynchronous operations by chaining //
// .then() and handling errors with .catch(). //
// This improves readability and maintains vertical code flow instead of horizontal nesting //



// promise is an object that links producing code and consuming code //

 // producing and consuming these are the two part of code //


 //  promise is a good way to handle asynchronous operations // 

 // promise has 3 states //
   //1 .pending //
   //2. fulfilled //
   //3.rejected //

   // in promise the variable is called promise object and that is use to create the promise  constructor //


  

const payment = (amt) => {
  return new Promise((resolve, reject) => {

    if (amt <= 0) {
      reject("Amount should be a positive value");
    } 
    else {
      setTimeout(() => {
        console.log("stage-1", `${amt} payment initiated....`);
        resolve(amt);

      }, 3000);
    }
  });
};

 let balance = 10000;

// STEP 2: Check Balance
const checkbalance = (amt) => {
  return new Promise((resolve, reject) => {

    if (amt > balance) {
      reject("Insufficient balance");
    } 
    else {
      setTimeout(() => {
        console.log(
          "stage-2","payment can be done due to sufficient balance");

        resolve(amt);
      }, 3000);
    }
  });
};



const paymentDeduct = (amt) => {
  return new Promise((resolve, reject) => {

    const remainBalance = balance - amt;

    if (remainBalance < 0) {
      reject(`${remainBalance} is available balance`);
    } 
    else {
      setTimeout(() => {
        console.log("stage-3", "processing payments...");

        balance = remainBalance;

        resolve(amt);

      }, 3000);
    }
  });
};

const paymentStatus = (amt) => {
  return new Promise((resolve, reject) => {

    const remainBalance = balance;

    console.log("remain balance", remainBalance);

    if (remainBalance >= 0) {
      setTimeout(() => {
        console.log("stage-4", "payment has been processed....");

        resolve(amt);

      }, 3000);
    } 
    else {
      reject("Payment has been failed");
    }
  });
};

payment(5000)

  .then((amt) => {
    return checkbalance(amt);
  })

  .then((amt) => {
    return paymentDeduct(amt);
  })

  .then((amt) => {
    return paymentStatus(amt);
  })

  .then((amt) => {
    console.log(`${amt} transaction successfully`);
  })

  .catch((error) => {
    console.log(error.message);
  });