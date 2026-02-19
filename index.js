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

const bookList = [];

addBook(bookList, "Ana", "ARe", 23, false);

console.log(bookList);