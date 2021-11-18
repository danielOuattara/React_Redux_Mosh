
// function sayHello () {
//     return "Hello!";
// }
// sayHello();

// let fn = sayHello;
// fn();

//----------------------------------------

// function greet(func) {
//     console.log(func())
// }

// function sayHello () {
//     return "Hello!";
// }
// greet(sayHello);

//-------------------------------------------


function sayHello () {
    return function(){
        return "Hello!";
    }
}

let fn = sayHello();
let message = fn();