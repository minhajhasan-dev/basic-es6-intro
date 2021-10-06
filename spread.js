const numbers = [23, 53, 52, 26, 75, 99];
// console.log(numbers);
// console.log(...numbers);
const max = Math.max(23, 99, 65);
const maxInArray = Math.max(...numbers); // array theke value gula paoar jonno spread operator use kora hoi.
// console.log(max, maxInArray);

const numbers2 = [22, ...numbers, 88];
numbers.push(55);
console.log(numbers);
console.log(numbers2);
