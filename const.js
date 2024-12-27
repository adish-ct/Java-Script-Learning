// The const declaration declares block-scoped local variables.
// The value of a constant can't be changed through reassignment using the assignment operator,
// but if a constant is an object, its properties can be added, updated, or removed.

const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
  // Expected output: TypeError: invalid assignment to const 'number'
  // (Note: the exact output may be browser-dependent)
}

console.log(number);
// Expected output: 42

// Syntax ...

const [value1, value2] = [1, 2];

const name1 = value1;
const name2 = value1,
  name3 = value2;
const name4 = value1,
  name5 = value2,
  /* …, */ nameN = valueN;
