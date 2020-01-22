function add(n1: number, n2: number, showResult) {
  // if (typeof n1 !== "number" || typeof n2 !== "number") {
  //   throw new Error("Incorrect Input!");
  // }

  return n1 + n2;
}

const number1 = 14;
const number2 = 10;
const printResult = true;

const result = add(number1, number2, printResult);

console.log(result);
