// Example data
const user = {
  name: "Sitesh",
  age: 20,
  address: {
    city: "New Delhi",
    zip: "110001",
  },
};

// Using if-else
if (user.age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Using else if ladder
const score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Using ternary operator
const message = user.age >= 18 ? "You are an adult." : "You are a minor.";
console.log(message);

// Using logical AND (&&)
const userName = user && user.name;
console.log(userName); // prints "Sitesh"

// Using logical OR (||)
const input = "";
const defaultText = input || "Default text";
console.log(defaultText); // prints "Default text"

// Using optional chaining (?.)
const city = user?.address?.city;
console.log(city); // prints "New Delhi"
