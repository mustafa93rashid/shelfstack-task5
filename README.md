# ShelfStack Library — Task 5

A simple library management project implemented in two versions:
- JavaScript (OOP with classes)
- TypeScript (interfaces and typed functions)

This repository demonstrates core concepts such as classes, inheritance, private fields, static methods, destructuring, and TypeScript typing.

---

## 📁 Repository Structure

This project uses **two branches**:

- `javascript` → Full implementation using JavaScript (classes + OOP)
- `typescript` → Full implementation using TypeScript (interfaces + types)

---

## 📌 JavaScript Version (Branch: javascript)

### Features

- Class-based design:
  - `LibraryItem` (base class)
  - `Book` (extends LibraryItem)
  - `Member` (with private field `#balance`)
  - `LibraryCatalog` (manages books)

- Concepts used:
  - `class`, `extends`, `super`
  - Method overriding (`describe`)
  - Private field (`#balance`)
  - Static method (`makeId`)
  - Array destructuring
  - Object destructuring

### Functionality

- Add books to catalog
- Borrow books
- Check availability
- Get statistics (total / available)
- Track member balance

---

## 📌 TypeScript Version (Branch: typescript)

### Features

- Strong typing using:
  - `type` (BookId)
  - `interface` (Book, Loan)

- Typed functions:
  - `addBook`
  - `findByIsbn`

### Functionality

- Add books to list
- Search book by ISBN
- Define loan structure

---

## ▶️ How to Run

### JavaScript Version

Switch to the branch:

```bash
git checkout javascript
```

Run the file:

```bash
node index.js
```

---

### TypeScript Version

Switch to the branch:

```bash
git checkout typescript
```

Install TypeScript (if not installed):

```bash
npm install
```

Compile TypeScript:

```bash
npx tsc
```

Run the compiled file:

```bash
node dist/index.js
```

---

## 📊 Example Output

### JavaScript
- Book borrowed successfully
- Book description printed
- Total and available books
- Member balance

### TypeScript
- List of books printed
- Found book by ISBN
- Loan object displayed

---

## 🧠 Concepts Covered

- Object-Oriented Programming (OOP)
- Inheritance and method overriding
- Encapsulation (private fields)
- Static methods
- Destructuring (array + object)
- TypeScript interfaces and types
- Immutable array updates

---

## ⚠️ Notes

- Each branch contains a **complete and separate implementation**
- No need for external libraries in JavaScript version
- TypeScript version includes `tsconfig.json`
- `node_modules` is ignored using `.gitignore`

---

## 🔗 Git Instructions

To switch between versions:

```bash
git checkout javascript
git checkout typescript
```

To list branches:

```bash
git branch -a
```

---

## 👨‍💻 Author

Created as part of **ShelfStack Task 5**
