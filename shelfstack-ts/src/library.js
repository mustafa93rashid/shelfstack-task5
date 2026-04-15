"use strict";
function addBook(list, book) {
    return [...list, book];
}
function findByIsbn(list, isbn) {
    return list.find((book) => book.isbn === isbn);
}
// Small demo
const book1 = {
    id: "b1",
    title: "Front End",
    isbn: "123-456789",
    author: "Focal X - Mohammmed",
};
const book2 = {
    id: "b2",
    title: "Back End",
    isbn: "987-654321",
    author: "Focal X - Moones",
};
const loan1 = {
    id: "l1",
    bookId: "b1",
    memberId: "m1",
};
let books = [];
books = addBook(books, book1);
books = addBook(books, book2);
const foundBook = findByIsbn(books, "123-456789");
console.log("Books:", books);
console.log("Found:", foundBook);
console.log("Loan:", loan1);
