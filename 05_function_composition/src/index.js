
/* Function Composition
------------------------- */

let input = "  Javascript  ";
let output = "<div>" + input.trim() + "</div>"; // 2 actions in 1

// solve using functionnal programming

 const trim = function (str) {
    return str.trim();
} 

const wrapInDiv = function(str) {
    return `<div>${str}</div>`;
}

const toLowerCase = function(str) {
    return str.toLowerCase();
}


// solution
const result = wrapInDiv(toLowerCase(trim(input))); // here is function composition

// Next compose & pipe using lodash to reduce final writing complexity