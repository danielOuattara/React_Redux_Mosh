
/* Function Composition
------------------------- */

import { compose, pipe} from 'lodash/fp';

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

const transformer = compose(wrapInDiv, toLowerCase, trim)  // 1
const transformer2 = pipe(trim, toLowerCase, wrapInDiv);  // 2

/* solution
-------------- */

// const result  = wrapInDiv( toLowerCase(trim(input))); // here is function composition

const result = transformer(input)
const result2 = transformer2(input)