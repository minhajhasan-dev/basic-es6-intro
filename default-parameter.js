function add(num1, num2 = 100) {
  //   num2 = num2 || 0;
  //   console.log(num1, num2);
  //   if (num2 == undefined) {
  //     num2 = 0;
  //   }
  const total = num1 + num2;
  return total;
}
const result = add(15);
console.log(result);

function fullName(first, last = "Chowdhury") {
  const name = first + " " + last;
  return name;
}
const result2 = fullName("Rahim");
console.log(result2);
