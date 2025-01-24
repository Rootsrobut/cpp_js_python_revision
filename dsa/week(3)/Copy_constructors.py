class Book:
    def __init__(self, title, author):
        self.Title = title
        self.Author = author
        self.RatesCounter = 2
        self.Rates = [0] * self.RatesCounter
        self.Rates[0] = 5
        self.Rates[1] = 4

    # Destructor
    def __del__(self):
        self.Rates = None

    def display(self):
        print(self.Author, self.RatesCounter)
        # Python equivalent to sizeof for length
        print(len(self.Rates) if self.Rates else 0)

    # Shallow copy constructor
    def shallow_copy(self, original):
        self.Title = original.Title
        self.Author = original.Author
        self.RatesCounter = original.RatesCounter
        self.Rates = original.Rates
        self.Rates[0] = 5
        self.Rates[1] = 4

    # Deep copy constructor
    def deep_copy(self, original):
        self.Title = original.Title
        self.Author = original.Author
        self.RatesCounter = original.RatesCounter
        self.Rates = [0] * original.RatesCounter
        self.Rates[0] = 5
        self.Rates[1] = 4


# Main
book1 = Book("Millionaire", "M.J. DeMarco")
book2 = Book("Millionaire", "M.J. DeMarco")
book2.display()

book3 = Book("", "")
book3.deep_copy(book2)
book3.display()
