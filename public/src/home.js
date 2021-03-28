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
  .slice(0, 5);
  return result; }
  
  
 /*const genres = [];
 books.forEach(book=>{
   const match = genres.find(genre.name === book.genre);
   if(match){
     match.count++;
   }else{
     const name = book.genre;
     genres.push({name, count: 1 });
   }
 });
 let result = genres.sort((genreA, genreB)=> genreA.count < genreB.count? 1: -1);
 result = result.slice(0,5);
 return result;
}
/*let result = books.reduce((acc,book)=> {
  if(acc[book.genre]== null){
    acc[book.genre]=1;
  }else{
    acc[book.genre]++;
  };
  return acc;
}, {})
let output = [];
for(const name in result){
  output.push({'name': name, 'count': result[name] })  
};
output.sort(function(less, more){
  return more.count - less.count;
});
 return output.slice(0,5);
};*/



function getMostPopularBooks(books) {
  let final = [];
  books.forEach(book=>{
    const name = book.title;
    const count = book.borrows.length;
    final.push({name, count});
  });
  return topFive(final);
}
  /*let found = [];
  books.forEach(book=>{
    const check = found.find(book => book.name === book.borrowed);
  if(check){
    check.count++;
  }
   found.push({name: book.name, count: 1 });
  })
  found.sort((v1, v2)=> v1.count < v2.count? 1: -1);
  found = found.slice(0,5);
  return found;
}*/
  /*const commonGenres = [];
books.forEach(book=>{
const genre = commonGenres.find(
currentGenre => currentGenre.name === book.borrowed
);
if (genre) {
genre.count++;
} else {
commonGenres.push({ name: book.genre, count: 1 }); } });
return topFive(commonGenres); }*/
  
  
  

   /*const final = [];
   books.forEach(book=>{
    const match = books.find(book=> book.name === book.borrowed);
    if(match){
      match.count++;
    }else{
      const name = book.name;
      final.push({name, count:1 }); }
    });
    let result = final.sort((arrA, arrB)=>arrA.count < arrB.count? 1: -1);
    result = result.slice(0,5);
    return result;*/


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
