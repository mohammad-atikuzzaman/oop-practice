class Library {
  constructor(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
  }
  getSummery() {
    return `${this.title} by ${this.author}, published in ${this.publishedYear}`;
  }
}

const book1 = new Library("Gitanzali", "Robi Thakur", 2025)
console.log(book1.getSummery());