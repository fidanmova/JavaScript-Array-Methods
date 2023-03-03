const myArray = [1, 3, 5, 7, 9];

// very similar to filter
const findArray = myArray.find((el) => el === 5);
console.log(findArray); //5

const peopleArray = [{ id: 1 }, { id: 4 }, { id: 7 }];
const findPeopleArray = peopleArray.find((person) => person.id === 4);
console.log(findPeopleArray);
