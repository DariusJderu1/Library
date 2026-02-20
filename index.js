function Book(title, author, pages, read) {

    if (!new.target)
        throw Error("You must use the 'new' operator to call the constructor");
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}
Book.prototype.changeStatus = function() {

    this.read = !this.read;
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
        readButton.innerText = book.read === true ? "Read" : "Not read";
        if(book.read)
            readButton.classList.add("read");
        else
            readButton.classList.add("unread");
        readButton.dataset.id = book.id;

        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-button");
        removeButton.innerText = "Remove";
        removeButton.dataset.id = book.id;
        removeButton.addEventListener("click", () => {

            const idBookToDelete = book.id;
            const index = books.findIndex(book => book.id === idBookToDelete);
            if(index !== -1)
                books.splice(index, 1);

            newCard.remove();
        });

        newCard.appendChild(titleSpan);
        newCard.appendChild(authorSpan);
        newCard.appendChild(pagesSpan);
        newCard.appendChild(readButton);
        newCard.appendChild(removeButton);
    }
}

//**********************************************

const bookList = [];

// Pop up part
const popUp = document.getElementById("pop-up");
const addBookDiv = document.getElementById("add-book");
const form = document.getElementById("book-form");

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckBox = document.getElementById("read");

// When the add book button is being pressed
addBookDiv.addEventListener("click", () => {

    popUp.showModal();
});

// When the user presses the popUp (exactly the pop up, so basically the overlay)
// not the div and its insides (like input and so on)
popUp.addEventListener("click", (event) => {

    if(event.target === popUp) 
        popUp.close();
});

// When the user submits the form, the pop closes
form.addEventListener("submit", (event) => {

    event.preventDefault();

    const booksContainer = document.querySelector(".books-container");
    booksContainer.innerHTML = "";

    addBook(bookList, titleInput.value, authorInput.value, pagesInput.value, readCheckBox.checked);

    displayBooks(bookList);

    popUp.close();

    // titleInput.value = "";
    // authorInput.value = "";
    // pagesInput.value = "";
    // readCheckBox.checked = false;
    form.reset();
});

//Change status part
const booksContainer = document.querySelector(".books-container");

booksContainer.addEventListener("click", event => {

    if(event.target.matches(".read") || event.target.matches(".unread")) {

        const idBookToToggle = event.target.dataset.id;

        const index = bookList.findIndex(book => {

            return book.id === idBookToToggle;
        });

        if(index !== -1) {

            bookList[index].changeStatus();

            event.target.innerText = bookList[index].read ? "Read" : "Not read";

            event.target.classList.toggle("read");

            event.target.classList.toggle("unread");
        }
    }
});