
function add( a, b) { // function taking 2 parameter
    return a + b;
}

// how to transform a multi-parameter function to 1 parameter function

function add(a) {
    return function(b) {
        return a + b;
    };
}

add(1)(5) // <==> add(1, 5)

const add = (a) => (b) => a + b

add(1)(5) // <==> add(1, 5)