function findAuthorById(authors, id) {
  let result = authors.find((author)=> author.id === id);
  return result;
}

function findBookById(books, id) {
  let result = books.find((book)=> book.id === id);
  return result;
}

function partitionBooksByBorrowedStatus(books) {
 /*let result = books.filter(book=>{
  for(let i = 0; i < book.length; i++){
    if(book[i].borrows === borrows[i].returned){
      result += borrows[i].returned === true||false;
    }
  }
 })
 return result;*/
 let result = [];
 const borrowed = books.filter((book) => book.borrows[0].returned === false);
const returned = books.filter((book) => book.borrows[0].returned === true);
result.push(borrowed, returned);
return result;
}

/*function getBorrowersForBook(book, accounts) {
  
  let result = accounts.filter((account)=>{
    for (let i = 0; i < account.length; i++){
      if(account[i].returned === book[i].returned){
        
      }
    }
  })
  let final = findAccounts(accounts, result);
  return final;
 }

 function findAccounts(accounts, borrowers){
   let doo = borrowers.map((borrowed)=>{
     for(let i = 0; i < borrowed.length; i++){
       if(accounts[i].returned === borrowed[i].returned){
     }
   }})
   return doo;
 }*/

 function getBorrowersForBook(book, accounts){
   let result = [];
   let borrowArray = book.borrows;
   borrowArray.forEach(borrow =>{
     let account = accounts.find(person=> person.id === borrow.id);
     let obj = account;
     obj['returned'] = borrow.returned;
     result.push(obj);
   })
   return result.slice(0,10);
 }
 
 

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
