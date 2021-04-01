function findAuthorById(authors, id) {
let result = authors.find((author)=> author.id === id);
return result;
}

function findBookById(books, id) {let result = books.find((book)=> book.id === id);return result;
}

function partitionBooksByBorrowedStatus(books) {
let result = [];
const borrowed = books.filter((book) => book.borrows[0].returned === false);
const returned = books.filter((book) => book.borrows[0].returned === true);
result.push(borrowed, returned);
return result;
}

function getBorrowersForBook(book, accounts){
let result = [];
let borrowArray = book.borrows;
borrowArray.forEach(borrow =>{
let account = accounts.find(person=> person.id === borrow.id);
let obj = account;
obj['returned'] = borrow.returned;
result.push(obj);
})
return result.slice(0,10)
}
 
 

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
