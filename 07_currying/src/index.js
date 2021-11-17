
/* Currying
------------------------- */

import { compose, pipe} from 'lodash/fp';

let input = "  Javascript  ";
let output = "<div>" + input.trim() + "</div>"; // 2 actions in 1

// solve using functionnal programming


const trim = (str) => str.trim(); 
// const wrapInType = (type, str) =>`<${type}>${str}</${type}>`  // currying ?


const wrapInType = (type) => (str) =>`<${type}>${str}</${type}>`  // currying ?



const toLowerCase = (str)=> str.toLowercase();

// const transformer = compose(wrapInDiv, toLowerCase, trim)  // 1
const transformer = pipe(trim, toLowerCase, wrapInDiv);  // 2

/* solution
-------------- */

// const result  = wrapInDiv( toLowerCase(trim(input))); // here is function composition

const result = transformer(input)