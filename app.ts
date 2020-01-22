function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result is " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(14, 10));

printResult(add(14, 10));
