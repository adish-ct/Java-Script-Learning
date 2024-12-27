// Spread & Rest Operator:
// The spread and rest operators actually use the same syntax: ... 

// Yes, that is the operator - just three dots. 
// It's usage determines whether you're using it as the spread or rest operator.

// Using the Spread Operator:

// The spread operator allows you to pull elements out of an array (=> split the array into a list of its elements) 
// or pull the properties out of an object. Here are two examples:

const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5]; // This now is [1, 2, 3, 4, 5];

const oldObject = { name: 'John', age: 25 };

const newObject = {...oldObject, city: 'New York' }; // This now is { name: 'John', age: 25, city: 'New York' };

// Using the Rest Operator:

// The rest operator allows you to collect all the remaining elements of an array (=> combine the array into a single value)

const numbers = [1, 2, 3, 4, 5];

const [first,...rest] = numbers; // first is 1, rest is [2, 3, 4, 5]

const person = { name: 'John', age: 25, city: 'New York' };

const { name,...restProps } = person; // name is 'John', restProps is { age: 25, city: 'New York' }

// The Spread Operator is also used in function calls to spread an array or object as arguments:

function sum(a, b, c) {
  return a + b + c;
}

const numbersToSum = [1, 2, 3];

console.log(sum(...numbersToSum)); // Outputs: 6

function greet({ name, age }) {
  console.log(`Hello, my name is ${name} and I'm ${age} years old.`);
}

const personToGreet = { name: 'John', age: 25 };

greet(...personToGreet); // Outputs: Hello, my name is John and I'm 25 years old.

// The Rest Operator is also used in destructuring assignments to unpack arrays or objects:

const [first1, second,...rest1] = numbers;

console.log(first); // Outputs: 1
console.log(second); // Outputs: 2
console.log(rest); // Outputs: [3, 4, 5]

const { name1, age,...restProps1 } = person;

console.log(name); // Outputs: John

console.log(age); // Outputs: 25

console.log(restProps); // Outputs: { city: 'New York' }

// In conclusion, the spread and rest operators are essential tools in JavaScript for manipulating arrays and objects. They allow you to easily create new arrays or objects from existing ones, combine arrays or objects, or unpack arrays or objects as arguments in functions. The spread operator is used to spread elements or properties from one array or object into another, while the rest operator is used to collect remaining elements or properties from an array or object.

// Note: The spread and rest operators are not available in Internet Explorer or older versions of Edge. You will need to use polyfills or transpilers to support them in older browsers.



