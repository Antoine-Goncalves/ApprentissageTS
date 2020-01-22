let userInput: unknown;
let userName: string;

userInput = "Test";
userInput = 14;

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number) {
  throw {
    message: message,
    errorCode: code
  };
}

const result = generateError("What's an error", 500);
console.log(result);
