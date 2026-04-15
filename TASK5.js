class LibraryItem {
  constructor({ id, title, isAvailable = true }) {
    this.id = id;
    this.title = title;
    this.isAvailable = isAvailable;
  }

  describe() {
    return `Item: ${this.id} - ${this.title} | Available: ${this.isAvailable}`;
  }

  borrow() {
    this.isAvailable = false;
  }

  returnItem() {
    this.isAvailable = true;
  }
}

class Book extends LibraryItem {
  constructor({ id, title, isbn, author, isAvailable = true }) {
    super({ id, title, isAvailable });
    this.isbn = isbn;
    this.author = author;
  }

  describe() {
    return `Book: ${this.title} by ${this.author} | ISBN: ${this.isbn} | Available: ${this.isAvailable}`;
  }
}

class Member {
  #balance;

  constructor(balance = 0) {
    this.#balance = balance;
  }

  deposit(n) {
    this.#balance += n;
  }

  getBalance() {
    return this.#balance;
  }
}

class LibraryCatalog {
  constructor() {
    this.items = [];
  }

  static makeId(prefix, number) {
    return `${prefix}${number}`;
  }

  addItem(book) {
    this.items.push(book);
  }

  registerLoan({ memberId, itemId }) {
    const item = this.items.find((book) => book.id === itemId);

    if (!item) {
      console.log(`Item ${itemId} not found for member ${memberId}`);
      return;
    }

    if (!item.isAvailable) {
      console.log(`Item ${itemId} is already borrowed`);
      return;
    }

    item.borrow();
    console.log(`Loan registered: member ${memberId} borrowed item ${itemId}`);
  }

  snapshotStats() {
    const total = this.items.length;
    const available = this.items.filter((book) => book.isAvailable).length;

    return { total, available };
  }
}

// Array destructuring proof
const [a, b] = ["b1", "b2"];

// Demo
const catalog = new LibraryCatalog();
const member = new Member();

member.deposit(50);

catalog.addItem(
  new Book({
    id: a,
    title: "Clean Code",
    isbn: "978-0132350884",
    author: "Martin",
  })
);

catalog.addItem(
  new Book({
    id: b,
    title: "JavaScript Basics",
    isbn: "978-1111111111",
    author: "Ahmad",
  })
);

catalog.registerLoan({ memberId: "m1", itemId: "b1" });

console.log(catalog.items[0].describe());

const { total, available } = catalog.snapshotStats();

console.log("Total books:", total);
console.log("Available books:", available);
console.log("Member balance:", member.getBalance());