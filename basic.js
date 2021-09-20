// variable
var deposit = 400;
// condition
if (deposit > 500) {
}
if (deposit < 200) {
}
if (deposit == 500) {
}
if (deposit != 500) {
}
if (deposit >= 500) {
} else if (deposit <= 500) {
} else {
}

// array
const numbers = [45, 64556, 23, 53, 667, 123];
const numberCount = numbers.length;
numbers.pop();
numbers.push(111);
numbers[2] = 98765;
// check whether 222 included in the array
if (numbers.indexOf(222) != -1) {
}
if (numbers.includes(222)) {
}

// loop
// while, for
for (const number of numbers) {
}
// function
function fullName(first, second) {
  const name = first + " " + second;
}
const person = fullName("Rahim", "Ali");

// object
const bottle = { color: "yellow", contain: "water", price: 50 };
