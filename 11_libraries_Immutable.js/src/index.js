// Immutability.js

// import { Map } from 'immutable';

// let book =  {
//     title: "Harry Potter",
// }
// console.log(book)


// function publish(book) {
//     book.isPublished = true; // do not mutate book // but its not the case here!
// }

// publish(book);
// console.log(book);

//-------------------------------------------------------------------

// let book = Map({title: "Harry Potter"});

// function publish(book) {
//     book.isPublished = true; 
// }

// publish(book);

// console.log(book)

// console.log(book.get("title"));

// console.log(book.toJS("title"));

// ------------------------------------------
import { Map } from 'immutable';

let book = Map({title: "Harry Potter"});

function publish(book) {
    return book.set("isPublished", true); 
}

book = publish(book);
console.log(book.toJS());