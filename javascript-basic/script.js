console.log("We're using external javascript linking");

// Define variable:
// Syntax: let variableName = variableValue
// Naming Convention : Camel Case (Same as Java)
// Naming Rules: Can only use number, letter, _, $ (Same as Java)
let firstName = "Joe";
console.log(firstName);

// JavaScript Data Type(Almost like Java):
//  - Primitive Data Type:
//      - Number: Floating point numbers (used for decimals and integers, and the biggest number is 9,007,199,254,740,991)
//      - String: Sequence of characters (Note: can be quoted by single quote or double quotes. And String is a primitive data type for JavaScript!!!)
//      - Boolean: Logical type that can only be true or false.
//      - Undefined: Value taken by a variable that is not yet defined. (e.g. let child -> defined but not initialized yet)
//      - Null: Real empty value
//      - Symbol(ES2015): Value that is unique and could not be changed. (Something like Enum in Java???)
//      - BigInt(ES2020): Larger integers than the number type can hold.
//  - Object (More on this later)
let number = 1.23;
console.log(typeof number);
let str = "JoeChen";
console.log(typeof str);
let bool = true;
console.log(typeof bool);
let defineButNotInitialized;
console.log(typeof defineButNotInitialized);

// Other keywords for declare a variable besides let:
//  - const -> define a const(once defined, it won't be able to change). Because the variables defined by const are immutable, we can not define a const variable without initialize it.
//  - var -> legacy way to define a variable, should be replaced by let always.
const birthYear = 1995;
console.log(birthYear);

// Operators: (Almost the same as Java)
// Arithmetic, logic, bit, comparison, assignment, ternary operator, ++, --
// Special ones: Power operation -> 2 ** 3 = 2 ^ 3 = 8
// Operator precedence: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table
let two = 2;
console.log(two ** 3);

// Strings and template literals with backtick
// Besides that backtick can also make a multiple string easier.
const name = "JoeChen";
const job = "SDE";
const age = 28;
// String concatenation without template literals:
console.log(
  "My name is " + name + ". And I'm " + age + " years old. My job is " + job
);
// String concatenation with template literals -> using ``:
console.log(`My name is ${name}. And I'm ${age} years old. My job is ${job}`);
// Multiline String
console.log(`My name is ${name}.
And I'm ${age} years old.
My job is ${job}`);

// Conditional statement: If - else (The same as Java)
if (age > 18) {
  console.log("You're an adult now!");
} else {
  console.log("Kid!");
}

// !!! Type conversion and coercion !!!.
//  Conversion:
//    String - > Number: Number("1995") = 1995
//    Number -> String: String(1995) = "1995"
//  Coersion:
//      '5' - '1' = 4
//      '5' / '2' = 2.5
//      '5' * '2' = 10
//      '5' ** '2' = 25
//      '5' + '1' = '51'
console.log("5" - "1");
console.log("5" / "2");
console.log("5" * "2");
console.log("5" ** "2");
console.log("5" + "1");

//Truthy and Falsy values(There are only 5 falsy values, and the rest should be truthy values):
//  - Falsy values: 0, '', undefined, null, NaN
// JS will automatically(through type coersion) to transfer the truthy value to true and falsy value to false when we are using (1) logic operator and/or (2) conditional statement.
const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

// Equality Operations: == vs ===
// == (loose equality): It will apply type coersion.
// === (stric equality): It won't apply type coersion. Only the value and type are equal, it will return true.
console.log("18" == 18);
console.log("18" === 18);

// Switch statement(it does a strict comparision):
const day = "monday";

switch (day) {
  case "monday":
    console.log("Coding on Monday");
    break;
  case "tuesday":
    console.log("Coding on Tuesday");
    break;
  case "wednesday":
  case "thursday":
    console.log("Coding on Wednesday and Thursday");
    break;
  case "friday":
    console.log("Coding on Friday");
    break;
  case "saturday":
  case "sunday":
    console.log("Take a rest on weekends");
  default:
    console.log("Not a valid day!");
}
