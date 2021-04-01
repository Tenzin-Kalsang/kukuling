const { numberOfBorrows } = require("./accounts");

function totalBooksCount(books) {
return books.reduce((acc, book)=> books.length,0);
}

function totalAccountsCount(accounts) {
return accounts.reduce((acc,account)=> accounts.length,0);
}

function booksBorrowedCount(books) {
let result = books.filter((book)=> !(book.borrows[0].returned));
return result.length;
}   


function getMostCommonGenres(books) {
const commonGenres = [];
for (let book of books) {
const genre = commonGenres.find(
(currentGenre) => currentGenre.name === book.genre
);
if (genre) {
genre.count++;
} else {
commonGenres.push({ name: book.genre, count: 1 }); } }
return topFive(commonGenres); }

function topFive(array) {
let result = array
.sort((countA, countB) => (countA.count < countB.count ? 1 : -1))
.slice(0, 5);return result; }
  
  
 
function getMostPopularBooks(books) {
let final = [];
books.forEach(book=>{
const name = book.title;
const count = book.borrows.length;
final.push({name, count});
});
return topFive(final);
}
 

function getMostPopularAuthors(books, authors) {
let array = [];
for(let author of authors){
const nameAuthor = `${author.name.first} ${author.name.last}`;
let count = 0;
for(let book of books){
if(author.id === book.authorId){
count = book.borrows.length;
}
}
 array.push({name: nameAuthor, count: count });
}
return topFive(array);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
