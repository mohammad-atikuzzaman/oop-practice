function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}


Book.prototype.summery = function(){
    return `${this.title} by ${this.author}, published in ${this.year}`
}

const giti = new Book ("Giti", "Akash", "2025")
console.log(giti.summery());