 
 const person = {name: "John"};
 // 1
 person.name = "Bob";

 // 2
 const updatedPerson = Object.assign({}, person, {name: "Bob", ag: 37}) ; // copy in the first arg all the element from the 2nd object
                                            // 3rd args specify the element to add to the new object
console.log(updatedPerson)
 // 3

