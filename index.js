function Book(title, author, pages, read) {

    if (!new.target)
        throw Error("You must use the 'new' operator to call the constructor");
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBook(bookList, title, author, pages, read) {

    bookList.push(new Book(title, author, pages, read));
}

function displayBooks(books) {

    const booksContainer = document.querySelector(".books-container");

    for(const book of books) {

        const newDiv = document.createElement("article");
        newDiv.classList.add("book-card");
        booksContainer.appendChild(newDiv);
    }
    
}

//**********************************************

const bookList = [];

addBook(bookList, "Ana", "ARe", 23, false);
addBook(bookList, "Ana", "ARe", 23, false);
addBook(bookList, "Ana", "ARe", 23, false);
addBook(bookList, "Ana", "ARe", 23, false);

displayBooks(bookList);