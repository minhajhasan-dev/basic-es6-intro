let priyoPerson = "Sima Islam";
priyoPerson = "Maksuda Khatun Sima";
const bou = "Sima Islam";

// default parameter
function getName(first, last = "Chowdhury") {
  return `${first} ${last}`;
}

// template string
const myPeople = `My lovely person is ${bou} and her full name is ${getName(
  priyoPerson
)} `;
console.log(myPeople);

// arrow function
const getName2 = (first, last) => first + " " + last;
const fiveTimes = (x) => x * 5;
const bigArrowFunc = (x, y, z) => {
  const firstPart = x + y;
  const secondPart = y * z;
  const thirdPart = x / z;
  const result = firstPart + secondPart * thirdPart;
  return result;
};


// spread operator
const numbers = [ 2, 4 ,5 6, 7,8];
const min = Math.min(...numbers);