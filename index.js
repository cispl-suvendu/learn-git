
class Book {
    constructor(title, author, isbn) {
        this.title = title
        this.author = author
        this.isbn = isbn
    }
    displayInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`)
    }
}

class Library {
    constructor() {
        this.books = []
    }
    addBook(book) {
        this.books.push(book)
        console.log(`Book: ${book.title} added to library`)
    }
    listBooks() {
        console.log('Books in the library:')
        this.books.forEach(book => book.displayInfo())
    }
}

const library = new Library()
const book1 = new Book("1984", "George Orwell", "123456789")
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "987654321")

library.addBook(book1)
library.addBook(book2)
library.listBooks()


class Car {
    constructor(brand, model) {
        this.brand = brand
        this.model = model
    }
    start() {
        console.log(`Car ${this.brand} ${this.model} is starting...`)
    }
}

let myCar = new Car("Toyota", "Camry")

myCar.start()