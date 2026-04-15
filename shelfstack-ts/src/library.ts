type BookId = string;

interface Book {
  readonly id: BookId;
  title: string;
  isbn: string;
  author: string;
}

interface Loan {
  id: string;
  bookId: string;
  memberId: string;
}

function addBook(list: Book[], book: Book): Book[] {
  return [...list, book];
}

function findByIsbn(list: Book[], isbn: string): Book | undefined {
  return list.find((book) => book.isbn === isbn);
}

// Small demo
const book1: Book = {
  id: "b1",
  title: "Front End",
  isbn: "123-456789",
  author: "Focal X - Mohammmed",
};

const book2: Book = {
  id: "b2",
  title: "Back End",
  isbn: "987-654321",
  author: "Focal X - Moones",
};

const loan1: Loan = {
  id: "l1",
  bookId: "b1",
  memberId: "m1",
};

let books: Book[] = [];
books = addBook(books, book1);
books = addBook(books, book2);

const foundBook = findByIsbn(books, "123-456789");

console.log("Books:", books);
console.log("Found:", foundBook);
console.log("Loan:", loan1);