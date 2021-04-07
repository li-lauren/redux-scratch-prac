// currying

function add(a) {
  return function(b) {
    return a + b;
  };
}

const add1 = add(1);
const res = add1(5);

// same
const altRes = add(1)(5);

// using arrow functions
const add2 = a => b => a + b;  // (a, b) => a + b