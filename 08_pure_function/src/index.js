
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