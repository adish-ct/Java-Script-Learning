// An arrow function expression is a compact alternative to a traditional function expression,
// with some semantic differences and deliberate limitations in usage:

// Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
// Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
// Arrow functions cannot use yield within their body and cannot be created as generator functions.

const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

console.log(materials.map((material) => material.length));
// Expected output: Array [8, 6, 7, 9]

// Arrow functions are useful for simple, short-lived functions and don't require a return statement.

const square = (number) => number * number;
console.log(square(5));

// Arrow functions can be used as arguments to higher-order functions.

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum);

// Arrow functions can also be used as shorthand for object methods.

const person = {
  name: "John",
  greet: () => console.log(`Hello, my name is ${this.name}!`),
};

person.greet();

// Arrow functions can't be used as constructors. Calling them with new throws a TypeError.

try {
  const animal = new Animal();
} catch (error) {
  console.error(error.message);

  // Expected output: Animal is not a constructor
}

// Arrow functions cannot use yield within their body and cannot be created as generator functions.

try {
  function* generator() {
    yield "Hello";
    yield "World";
  }

  const iterator = generator();
  console.log(iterator.next().value);
  console.log(iterator.next().value);
} catch (error) {
  console.error(error.message);

  // Expected output: yield is not allowed in function*
}

// Syntax :

// const functionName = (param1, param2, ...) => expression;

() => expression;

(param) => expression;

(param) => expression;

(param1, paramN) => expression;

() => {
  statements;
};

(param) => {
  statements;
};

(param1, paramN) => {
  statements;
};
