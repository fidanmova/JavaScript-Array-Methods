// Includes takes single argument, returns true or false

const myArray = [1, 2, 3, 4, 5];

const includesArray = myArray.includes(8);
console.log(includesArray); // false

// First argument is what we search, second is index: Search if the index 1 includes number 2
const checkIndex = myArray.includes(2, 1);
console.log(checkIndex); // true

// Objects
const o1 = { id: 1 };
const o2 = { id: 2 };
const o3 = { id: 3 };

const ArrayOfObject = [o1, o2, o3];
console.log(ArrayOfObject); // [ { id: 1 }, { id: 2 }, { id: 3 } ]

// Includes method for objects
const includesObject = ArrayOfObject.includes(o1);
console.log(includesObject); // true
