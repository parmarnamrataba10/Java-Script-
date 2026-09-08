
function selectProduct(cb) {
  setTimeout(() => {
    console.log("Step-1: Product selected...");
    cb();
  }, 2000);
}

function placeOrder(cb) {
  setTimeout(() => {
    console.log("Step-2: Order placed...");
    cb();
  }, 2000);
}

function makePayment(cb) {
  setTimeout(() => {
    console.log("Step-3: Payment completed...");
    cb();
  }, 2000);
}

function shipProduct(cb) {
  setTimeout(() => {
    console.log("Step-4: Product shipped...");
    cb();
  }, 2000);
}

selectProduct(() => {
  placeOrder(() => {
    makePayment(() => {
      shipProduct(() => {
        console.log("Order completed successfully!");
      });
    });
  });
});