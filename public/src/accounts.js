function findAccountById(accounts, id) {
 const account = accounts.find((account) => account.id === id); return account; }


function sortAccountsByLastName(accounts) {
  const sortedNames = accounts.sort((lastA, lastB) =>
  lastA.name.last.toLowerCase() > lastB.name.last.toLowerCase() ? 1 : -1
  
  ); return sortedNames; }


function numberOfBorrows(account, books) {
  let count = 0;
  books.map(book => book.borrows.map(borrow => { if(borrow.id == account.id) { count += 1 } }))
  return count;
}

function getBooksPossessedByAccount(account, books, authors) {
 let result = books.reduce((acc, book)=>{
   for (let i=0; i < book.borrows.length; i++){
     if(book.borrows[i].id === account.id && book.borrows[i].returned === false){acc.push(book)}return acc;
   }
 },[]);

 let author = addAuthor(authors, result);
 return author;
}
function addAuthor(authors,books){
  for(let i= 0; i < books.length; i++){
    for (let j=0; j < authors.length; j++){
      if( books[i].authorId === authors[j].id){
        books[i].author = authors[j];
      }
    }
  }
return books;}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
