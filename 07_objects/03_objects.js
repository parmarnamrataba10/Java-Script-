

const book = {
  title: "JavaScript Basics",
  author: "John",
  price: 499,
};

console.log("book=> ", book);

// Destructuring object//


const { title, author, price } = book;

console.log("Title=> ", title);
console.log("Author=> ", author);
console.log("Price=> ", price);

function BookDetails(title, author, price) {
  this.title = title;
  this.author = author;
  this.price = price;
}

const book1 = new BookDetails("Python Guide", "David", 699);
console.log("book1=> ", book1);

const book2 = new BookDetails("React Master", "Alex", 899);
console.log("book2=> ", book2);

// Prototype //
BookDetails.prototype.language = "English";

console.log(book1.language);

// Delete property //

delete book.price;

console.log(book);

// hasOwnProperty() //


console.log(book.hasOwnProperty("title"));
console.log(book.hasOwnProperty("price"));