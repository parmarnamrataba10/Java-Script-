

//  most modern asynchronous JavaScript methods don't use callbacks. Instead, asynchronous programming is solved using Promises and async-await. //

// An async function always returns a Promise. //


// asynchronous programming using callbacks, Promises, and async-await. //

// async-await allows you to write asynchronous code in a synchronous manner. //
 
// This makes the code more readable and easier to maintain. //



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


const makePayment = async () => {

  try {

    const amt = await payment(5000);

    const balanceAmount = await checkbalance(amt);

    const deductedAmount = await paymentDeduct(balanceAmount);

    const status = await paymentStatus(deductedAmount);

    console.log(`${status} transaction successfully`);

  } 
  catch (error) {

    console.log(error);

  }

};

makePayment();