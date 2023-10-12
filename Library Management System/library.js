// Library Management System
const library = [];
// 
function addBook(title, author, genre, year) {
  const newBook = {
    title: title,
    author: author,
    genre: genre,
    year: year,
    available: true,
  };
  library.push(newBook);
}

function displayBooks() {
  console.log("Books in the library:");
  library.forEach((book) => {
    // console.log(`Title: ${book.title}`);
    // console.log(`Author: ${book.author}`);
    // console.log(`Genre: ${book.genre}`);
    // console.log(`Year: ${book.year}`);
    // console.log(`Availability: ${book.available ? "Available" : "Not Available"}`);
    // console.log("-----------------------");
  });
}

function findBooksByAuthor(authorName) {
  const booksByAuthor = library.filter((book) => book.author === authorName);
  return booksByAuthor;
}

function borrowBook(bookTitle) {
  const book = library.find((book) => book.title === bookTitle);
  if (book) {
    if (book.available) {
      book.available = false;
      console.log(`You have successfully borrowed "${book.title}".`);
    } else {
      console.log(`Sorry, "${book.title}" is currently not available.`);
    }
  } else {
    console.log(`Book with title "${bookTitle}" not found in the library.`);
  }
}

function returnBook(bookTitle) {
  const book = library.find((book) => book.title === bookTitle);
  if (book) {
    if (!book.available) {
      book.available = true;
      console.log(`You have successfully returned "${book.title}".`);
    } else {
      console.log(`"${book.title}" is already available in the library.`);
    }
  } else {
    console.log(`Book with title "${bookTitle}" not found in the library.`);
  }
}

// Test the Library Management System
addBook("Book 1", "Author 1", "Genre 1", 2000);
addBook("Book 2", "Author 2", "Genre 2", 2010);
addBook("Book 3", "Author 1", "Genre 3", 2015);

displayBooks();

const booksByAuthor = findBooksByAuthor("Author 1");
console.log("Books by Author 1:");
console.log(booksByAuthor);

borrowBook("Book 1");
borrowBook("Book 4");

returnBook("Book 1");
returnBook("Book 2");

displayBooks();


// Your JavaScript code here (same as provided earlier)

// For example, you can use the code provided earlier in this file.

// Make sure the library.js file is in the same directory as the index.html file.

// Test the Library Management System
addBook("Book 1", "Author 1", "Genre 1", 2000);
addBook("Book 2", "Author 2", "Genre 2", 2010);
addBook("Book 3", "Author 1", "Genre 3", 2015);

displayBooks();

document.getElementById("addBookForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const genre = document.getElementById("genre").value;
  const year = parseInt(document.getElementById("year").value);
  addBook(title, author, genre, year);
  displayBooks();
  event.target.reset();
});

document.getElementById("borrowBookForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const bookTitle = document.getElementById("borrowTitle").value;
  borrowBook(bookTitle);
  displayBooks();
  event.target.reset();
});

document.getElementById("returnBookForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const bookTitle = document.getElementById("returnTitle").value;
  returnBook(bookTitle);
  displayBooks();
  event.target.reset();
});