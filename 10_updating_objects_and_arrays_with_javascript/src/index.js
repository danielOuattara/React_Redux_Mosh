
/* Currying
------------------------- */

import { compose, pipe} from 'lodash/fp';

let input = "  Javascript  ";
let output = "<div>" + input.trim() + "</div>"; // 2 actions in 1

// solve using functionnal programming


const trim = (str) => str.trim(); 

const wrapInType = (type) => (str) =>`<${type}>${str}</${type}>`  // currying ?

const toLowerCase = (str)=> str.toLowerCase();

const transformer = compose(wrapInType("div"), toLowerCase, trim)  // 1
const transformer2 = pipe(trim, toLowerCase, wrapInType("div"));  // 2

/* solution
-------------- */

// const result  = wrapInDiv( toLowerCase(trim(input))); // here is function composition

const result1 = transformer(input);
const result2 = transformer2(input);

console.log(result1);
console.log(result2);


/* Updating objects
------------------------- */

 const person1 = {name: "John", age: 23};

 // 1
 person1.name = "Bob";
 console.log("person1 = ", person1);


 const person2 = {name: "John"};
 /* 2 : copy in the first arg all the element from the 2nd object
    3rd args specify the element to add to the new object */
 const updatedPerson2 = Object.assign({}, person2, {name: "Bob", ag: 37}) ; 
console.log(updatedPerson2);


const person3 = {name: "John", age: 30};
const updatedPerson3 = {
    ...person3,
    name: "Tony" 
};


const person4 = {
    name: "John", 
    age: 30,
    address: {
      country: 'Mali',
      city: 'Gao',
      children: ["Abou", "Tesnet", "Jamila"]
    }

};
const updatedPerson4 = {
    ...person4,
    name: "Tony",
    address: {
        ...person4.address,
        country: "Niger",
        city: "Niamey",
        children: [...person4.address.children, "Malaïka", "Gaïa"]
    }
}

console.log(updatedPerson4);


// Updating Arrays

const primeNumbers = [ 2, 3, 5, 7];
const updatedPrimeNumbers = [...primeNumbers, 11, 13, 17]

console.log(updatedPrimeNumbers);

const arr = [ 1, 2, 3 ];  // how to get [ 1, 4, 2, 3]

const index = arr.indexOf(2);
const updatedArr = [ ...arr.slice(0, index), 4, ...arr.slice(index) ];
console.log(updatedArr);

const arr2 = [1, 2, 3, 4];  // how to remove : 2
const removedArr2 = arr2.filter(num => num !== 2);
console.log(removedArr2);

// updating

const updatedArr2 = arr2.map (num => num == 2 ? 7: num)
console.log(updatedArr2);