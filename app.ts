function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;

  //   if (resultConversion === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
}

const combinedAges = combine(23, 23, "as-number");
console.log(combinedAges);

const combinedNamesAges = combine("14", "10", "as-number");
console.log(combinedNamesAges);

const combinedNames = combine("Antoine", "Kelly", "as-text");
console.log(combinedNames);
