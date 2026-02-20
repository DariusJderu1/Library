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

        const newCard = document.createElement("article");
        newCard.classList.add("book-card");
        booksContainer.appendChild(newCard);

        const titleSpan = document.createElement("span");
        titleSpan.innerText = book.title;

        const authorSpan = document.createElement("span");
        authorSpan.innerText = book.author;

        const pagesSpan = document.createElement("span");
        pagesSpan.innerText = book.pages;

        const readButton = document.createElement("button");
        readButton.innerText = book.read == true ? "Read" : "Not read";
        if(book.read)
            readButton.classList.add("read");
        else
            readButton.classList.add("unread");

        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-button");
        removeButton.innerText = "Remove";

        newCard.appendChild(titleSpan);
        newCard.appendChild(authorSpan);
        newCard.appendChild(pagesSpan);
        newCard.appendChild(readButton);
        newCard.appendChild(removeButton);
    }
    
}

//**********************************************

const bookList = [];

addBook(bookList, "Ana", "ARe", 23, false);
addBook(bookList, "Ana", "ARe", 23, true);
addBook(bookList, "Ana", "ARe", 23, false);
addBook(bookList, "Ana", "ARe", 23, true);

displayBooks(bookList);

// Pop up part
const popUp = document.getElementById("pop-up");
const addBookDiv = document.getElementById("add-book");

addBookDiv.addEventListener("click", () => {

    popUp.showModal();
});