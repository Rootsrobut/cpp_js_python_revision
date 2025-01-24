class Book {
    constructor(title, author) {
      this.Title = title;
      this.Author = author;
      this.RatesCounter = 2;
      this.Rates = new Array(this.RatesCounter);
      this.Rates[0] = 5;
      this.Rates[1] = 4;
    }
    destroy() {
      this.Rates = null;
    }
    display() {
      console.log(this.Author, this.RatesCounter);
      console.log(this.Rates ? this.Rates.length : 0);
    }
  
    // Shallow copy constructor
    shallowCopy(original) {
      this.Title = original.Title;
      this.Author = original.Author;
      this.RatesCounter = original.RatesCounter;
      this.Rates = original.Rates;
      this.Rates[0] = 5;
      this.Rates[1] = 4;
    }
  
    // Deep copy constructor
    deepCopy(original) {
      this.Title = original.Title;
      this.Author = original.Author;
      this.RatesCounter = original.RatesCounter;
      this.Rates = new Array(original.RatesCounter);
      this.Rates[0] = 5;
      this.Rates[1] = 4;
    }
  }
  
  // Main
  const book1 = new Book("Millionaire", "M.J. DeMarco");
  const book2 = new Book("Millionaire", "M.J. DeMarco");
  book2.display();
  
  const book3 = new Book("");
//   book3.shallowCopy(book2);
  book3.deepCopy(book2);
  book3.display();
  