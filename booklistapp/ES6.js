//class book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
//class UI

class UI {
    addBookToList(book) {
        //prototype function
        UI.prototype.addBookToList = function (book) {
            const list = document.getElementById('book-list');
            const row = document.createElement('tr');
            row.innerHTML = `<td>${book.title}</td>
                         <td>${book.author}</td>
                         <td>${book.isbn}</td>
                         <td><a href="#" class="delete">X</a></td>`;

            list.appendChild(row);
        }

    }
    clearList() {
        document.getElementById('title').value = "";
        document.getElementById('author').value = "";
        document.getElementById('isbn').value = "";

    }
    showAlert() {
        //creating new div element
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));

        //parent element
        const container = document.querySelector('.container');
        const form = document.getElementById("book-form");

        //placing the div before container and form
        container.insertBefore(div, form);

        //remove alert after 2 seconds
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000)

    }
    deleteBookFromList(target) {
        if (target.className == 'delete') {
            target.parentElement.parentElement.remove();
        }

    }
}

//Event listeners
document.getElementById('book-form').addEventListener('submit', addBook);
function addBook(e) {

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    //new book
    const book = new Book(title, author, isbn);
    const ui = new UI();//object created

    if (title === "" || author === "" || isbn === "") {
        ui.showAlert("please enter all fields...!", 'error');
    } else {
        ui.addBookToList(book);
        ui.clearLISt();
        ui.showAlert("Book added and success", "success");
    }
    e.preventDefault();
}

//event listener to delete book
document.getElementById("book-list").addEventListener('click', deleteEvent);

function deleteEvent(e) {
    const ui = new UI();
    ui.deleteEvent(e.target);
    ui.showAlert("Boor removed", "error");
    e.preventDefault();
}