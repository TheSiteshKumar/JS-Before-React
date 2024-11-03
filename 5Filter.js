// filter()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function even(num) {
  return num % 2 === 0;
}
const evenNumbers = numbers.filter(even);
console.log(evenNumbers);

// Array of product objects
const products = [
  { id: 1, name: "Laptop", price: 1500 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Tablet", price: 1200 },
  { id: 4, name: "Monitor", price: 300 },
];

const costly = products.filter((product) => product.price > 1000);

console.log(costly);
