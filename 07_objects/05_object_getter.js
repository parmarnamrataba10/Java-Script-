

    // Getter method //

    const voter = {
  name: "sergio",
  age: "",
  profession: "professor",

  set setAge(age) {
    if (age <= 18) {
      console.log("age is not valid for voting");
      return;
    }
    this.age = age;
  },
};

voter.setAge=17;



   /// example -1 //


const car = {
  brand: "Toyota",
  year: 0,

  set setYear(year) {
    if (year < 2000) {
      console.log("Car model year must be 2000 or later.");
      return;
    }
    this.year = year;
  }
};

car.setYear = 2024;

console.log(car);


// example -2 //



const account = {
  accountHolder: "Riya",
  balance: 0,

  set setBalance(balance) {
    if (balance < 1000) {
      console.log("Minimum balance should be 1000.");
      return;
    }
    this.balance = balance;
  }
};

account.setBalance = 15000;

console.log(account);



// example-3 //

const mobile = {
  brand: "Samsung",
  price: 0,

  set setPrice(price) {
    if (price < 5000) {
      console.log("Mobile price must be at least 5000.");
      return;
    }
    this.price = price;
  }
};

mobile.setPrice = 25000;

console.log(mobile);