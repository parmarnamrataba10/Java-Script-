

const foodItems = ["Pizza", "Burger", "French Fries"];

function createOrder(foodItems) {

  const order = new Promise((resolve, reject) => {

    if (foodItems.length === 0) {
      reject("Food cart is empty");
    }

    setTimeout(() => {

      const orderId = "12345";

      console.log("Food items:", foodItems);
      console.log("Order ID:", orderId);

      resolve(orderId);

    }, 3000);
  });

  return order;
}


const shop = createOrder(foodItems);


shop
  .then((orderId) => {

    console.log("Checking Order ID...");
    if (orderId === "12345") {
      return orderId;
    } 
    else {
      throw new Error("Order ID does not match");
    }

  })
  .then((orderId) => {

    console.log("Order ID matched:", orderId);
    console.log("Order confirmed successfully");

  })

  .catch((error) => {

    console.log(error.message || error);

  });
