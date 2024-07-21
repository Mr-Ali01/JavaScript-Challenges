// const books=[
//    {
//       title: "English",
//       author: "Samir",
//       year: 2005
//    }
// ]

 let book={
      title: "English",
      author: "Samir",
      year: 2005,
     get1: function(){
      return [this.title,this.author]
     },
     set1: function(newYear){
      this.year = newYear;
     }
      }

      // console.log(book);
// task2
      // console.log(book.author);
      // console.log(book.title);

// task3
// console.log(book.get1());
// task 4
// console.log("year: ",book.year);
const obj1 =  book;
const obj2 = book;
obj1.set1(2002)
// console.log("year: ",obj1.year);
// obj2.set1(2006)
// console.log("year: ",obj2.year);
// console.log("year: ",obj1.year);

// task 5
const libraryBooks = {
      fiction: {
         book1 :[
            {
                  title: 'To Kill a Mockingbird',
                  author: 'Harper Lee',
                  year: 1960
            },
         ]
      },
      nonFiction: {
            book2:[
                  {
                        title: "Automic Habbit",
                        author: 'mk',
                        year: 1999
                  }
            ]
      },
      get: function title1(){
            return `${this.fiction.book1[0].title}, ${this.fiction.book1[0].year}`
      }
}
// console.log(libraryBooks);
// task  6
// console.log(libraryBooks.fiction.book1[0].title);
// console.log(libraryBooks.nonFiction.book2[0].title);

// task 7
// console.log(libraryBooks.title1);
// task 8
let bookLibray = {
      title: 'Physics',
      author:'bk',
      year: 1997
}
for(let key in bookLibray){
      // console.log(`${key} : ${bookLibray[key]}`);
      
}

// task 9
console.log(`${Object.keys(bookLibray)}`);
console.log(`${Object.values(bookLibray)}`);