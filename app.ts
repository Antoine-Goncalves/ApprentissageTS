function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: string
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (resultConversion === "as-number") {
    return +result;
  } else {
    return result.toString();
  }
}

const combinedAges = combine(23, 23, "as-number");
console.log(combinedAges);

const combinedNamesAges = combine("Antoine", 23, "as-number");
console.log(combinedNamesAges);

const combinedNames = combine("Antoine", "Kelly", "as-text");
console.log(combinedNames);
