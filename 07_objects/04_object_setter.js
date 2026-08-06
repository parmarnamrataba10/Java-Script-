
// the setter method is use to set a property on the base of some calculation 


// get method example

const person = {
  name: "dexter",
  surname: "morgan",
  age: 30,
  passion: "forensic expert",

  get fullName() {
    return this.name + " " + this.surname;
  }
};

console.log(person.fullName)

// example-1 //


const college = {
  name: "Swami Sahajanand College",
  city: "Bhavnagar",
  course: "BCA",

  get collegeInfo() {
    return this.name + " - " + this.city;
  }
};

console.log(college.collegeInfo);


// example-2 //

const animal = {
  name: "Tiger",
  type: "Wild Animal",
  color: "Orange",

  get animalDetails() {
    return this.name + " - " + this.type;
  }
};

console.log(animal.animalDetails);


// example-3 //


const city = {
  name: "Ahmedabad",
  state: "Gujarat",
  country: "India",

  get cityDetails() {
    return this.name + ", " + this.state;
  }
};

console.log(city.cityDetails);