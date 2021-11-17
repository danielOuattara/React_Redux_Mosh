
/* High Order Function
------------------------- */

function sayHello () { // <-- high-order function
    return function(){
        return "Hello!";
    }
}

let fn = sayHello();
let message = fn();

//
let numbers = [ 1,2,3];
//

numbers.map(number => number * 3)

//

setTimeout(function(){ console.log("Hello")}, 2000)