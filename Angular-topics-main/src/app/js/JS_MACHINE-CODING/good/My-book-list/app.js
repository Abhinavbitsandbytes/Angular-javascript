// Book Class: represents a Book

class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}



// UI Class: Handle UI Tasks

class UI {
    static displayBooks() {
        
        const books = Store.getBooks();

        books.forEach((book) => {
            UI.addBookToList(book);
        });
    }

    static addBookToList(book) {
        const list = document.getElementById('book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><button class="delete">Delete</button></td>
        `
        list.appendChild(row);

    }

    static deleteBook(el){
        if(el.classList.contains('delete')){
           el.parentElement.parentElement.remove()
        }
    }
}

// Store Class: Handles Storage

class Store{

   static getBooks(){

    let books;
    if(localStorage.getItem('books') === null){
        books = []; 
    }
    else{
       books = JSON.parse(localStorage.getItem('books'));
    
    }
return books
    }

   static addBook(book){

    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));

    }

   static removeBook(isbn){

    const books = Store.getBooks();
    books.forEach((book, index) =>{
        if (book.isbn === isbn){
            books.splice(index, 1);
        }
    }) 

    localStorage.setItem('books', JSON.stringify(books))

    }
}

// Event: Display Books

document.addEventListener('DOMContentLoaded', (e)=>{
    UI.displayBooks()
})

// Event: Add a Book

document.getElementById('add-book').addEventListener('click', (e) =>{
   
    e.preventDefault();
    // get form values
   
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
  
        // instantiate book
        const book = new Book(title, author, isbn);

        // add book to UI
        UI.addBookToList(book)

        // Add book to store
        Store.addBook(book);

})

document.getElementById('book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target)

    // Remove book from Store

    Store.removeBook(e.target.parentElement.previousElementSibling.textContent )
})

// Event: Remove a Book