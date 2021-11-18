
function myFunction (number) { // Not a pure function
    return number * Math.random();
}

function myFunction (number) { // Pure function
    return number * 2;
}

/**
 In pure function : 
  - No random values
  - No curent date/time
  - No global state(DOM ,files, db, etc...)

  In redux , reducers must be pure functions, 
  but other function don't have to be.
 */


function isEligibleNotPure(age) { // Not pure : minAge is a global variable
    return age > minAge
}
function isEligiblePureFunction(age, minAge) { // Not pure
    return age > minAge
}