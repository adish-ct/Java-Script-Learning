// The let declaration declares re-assignable, block-scoped local variables, 
// optionally initializing each to a value.

let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 1


// Syntax ...
let value1 = 10
let value2 = 11
let name1;
let name2 = value1;
let name3 = value1, name4 = value2;

let name5, name6 = value2;
let name7 = value1, name8, /* …, */ nameN = valueN;
