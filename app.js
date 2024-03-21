const arrayOfCars = [
  { id: 1, model: "Audi" },
  { id: 2, model: "BMW" },
  { id: 3, model: "Subaru" },
  { id: 4, model: "Ford" },
];

// todo: Goal is to get object like one bellow
// const objectOfCars = {
//   1: "Audio",
//   2: "BMW",
//   3: "Subaru",
//   4: "Ford",
// };

// Solution 1:
// // define empty objectOfCars object
// const objectOfCars = {};
// // run a for loop
// for (const car of arrayOfCars) {
//   objectOfCars[car.id] = car.model;
// }

// Solution 2:
const objectOfCarsOrg = arrayOfCars.reduce((accumulator, car) => {
  accumulator[car.id] = car.model;
  return accumulator;
}, {});

// Refactoring Solution 2:
const objectOfCars = arrayOfCars.reduce((acc, { id, model }) => ({ ...acc, [id]: model }), {});
