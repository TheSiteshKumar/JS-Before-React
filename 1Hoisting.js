console.log(typeof greet); // "function" (function is hoisted first)

var greet = "Hello";

function greet() {
  console.log("Hi!");
}

console.log(typeof greet); // "string" (variable assignment overrides the function)
