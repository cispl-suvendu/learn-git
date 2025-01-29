
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
const book3 = new Book("New Book", "John Dio", "123456789")
const book4 = new Book("New Book Main staging update from dev - working while designer added new style", "John Dio Rio", "123456789")


library.addBook(book1)
library.addBook(book2)
library.addBook(book3)
library.addBook(book4)
library.listBooks()


class Vicehel {
    constructor(name) {
        this.name = name
    }
}

class Car extends Vicehel {
    constructor(name, brand, model) {
        super(name)
        this.brand = brand
        this.model = model
    }
    start() {
        console.log(`${this.name} ${this.brand} ${this.model} is starting...`)
    }
}

let myCar = new Car("Car", "Toyota", "Camry")

let truck = new Car("Truck", "Tata", "EH600")

myCar.start()

truck.start()

class BankAccount {
    #balance = 0;
    constructor(owner, inetialBalance) {
        this.owner = owner
        this.#balance = inetialBalance
        this.opeanAccount()
    }

    opeanAccount(){
        console.log(`Account opened for ${this.owner} with initial balance ${this.#balance}`)
    }

    deposit(amount) {
        this.#balance += amount
        console.log(`Deposit: ${amount} to ${this.owner} account`)
    }

    withDraw(amount){
        if(this.#balance >= amount){
            this.#balance -= amount
            console.log(`Withdraw: ${amount} from ${this.owner} account`)
        }else{
            console.log(`Insufficient balance`)
        }
    }

    checkBalance(){
        console.log(`Balance: ${this.#balance}`)
    }
}


let account1 = new BankAccount("John", 1000)
account1.deposit(500)
account1.checkBalance()
account1.withDraw(200)
account1.checkBalance()
account1.withDraw(2000)
account1.checkBalance()


class GmailAccount extends BankAccount{
    constructor(owner, email, inetialBalance = 0) {
        super(owner, inetialBalance)
        this.email = email
        this.opeanAccount2()
    }

    opeanAccount2(){
        console.log(`Gmail Account opened for ${this.owner} with email ${this.email}`)
    }
}

let gmailAccount = new GmailAccount("Rio", "Rio.deo@gmail.com", 500)



class Account {
    #balance
    constructor(owner, inetialBalance = 0) {
        this.owner = owner
        this.#balance = inetialBalance
    }
    
    greet(){
        return `Hello ${this.owner} Your Account is now active and balance is ${this.#balance}`
    }
    
    checkBalance(){
        return this.#balance
    }
    deposit(amount){
        this.#balance += amount
        return `Deposit: ${amount} to ${this.owner} account`
    }
    withDraw(amount){     
        if(this.#balance >= amount){
            this.#balance -= amount
            return `Withdraw: ${amount} from ${this.owner} account`
        }else{
            return `Insufficient balance`
        }
    }

}

