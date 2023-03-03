const array = [1, 2, 3, 4, 5];
// reduce takes to arguments: 1. Function. Function has 2 parameters (accumulator,elementItself=currentElement) 2. is  Initial value

const reduce = array.reduce(
  (accumulator, currentElement) => accumulator + currentElement,
  0
);
console.log(reduce); // 15
