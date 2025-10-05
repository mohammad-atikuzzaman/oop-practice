class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
    return this.books;
  }
  removeBook(book) {
    const index = this.books.findIndex((b) => b.title === book.title);
    this.books.splice(index, 1);
    return this.books;
  }
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const b1 = new Book("B1", "Atik");
const library = new Library("Atik's personal library");

// console.log(library);
library.addBook(b1);
// console.log(library);
library.addBook(new Book("B2", "Akash"));
library.addBook(new Book("B3", "M. Atik"));
library.addBook(new Book("B4", "M. Akash"));
library.addBook(new Book("B5", "Atik H."));
// console.log(library);
// library.removeBook(new Book("B3", "M. Atik"));
// console.log(library);

class DigitalLibrary extends Library {
  constructor(name) {
    super(name);
    this.books = [...library.books];
  }
  downloadBook(book) {
    if (!book) return "Which book you want to download";
    const match = this.books.find((b) => b.title === book.title);
    if (!match) {
      return "Book not found";
    }
    return `${book.title} is downloading from ${this.name}, its author is ${book.author}`;
  }
  addBook(book) {
    this.books.push(book);
    return this.books;
  }
}

const dl1 = new DigitalLibrary("Akash's Online Library");
dl1.addBook(new Book("B6", "H. Atik"));

// console.log(library);
// console.log(dl1);
console.log(dl1.downloadBook());
