const numbers = [1, 2, 3, 4, 5];

// Double each value
const doubled = numbers.map((num) => num * 2);
console.log(doubled); 


// Triple each value
const tripled = numbers.map((num) => num * 3);
console.log(tripled); 


// Convert each value to binary
const binary = numbers.map((num) => num.toString(2));
console.log(binary); 

console.log(numbers); // [10, 20, 30] (original array remains unchanged)