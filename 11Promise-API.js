// Sample promises
const promise1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, "First!")
);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 200, "Second!")
);
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 300, "Third!")
);

// Using Promise.all
Promise.all([promise1, promise2, promise3])
  .then((values) => console.log("All resolved:", values))
  .catch((error) => console.log("One failed:", error));

// Using Promise.allSettled
Promise.allSettled([promise1, promise2, promise3]).then((results) =>
  console.log("All settled:", results)
);

// Using Promise.race
Promise.race([promise1, promise2, promise3])
  .then((value) => console.log("Race won by:", value))
  .catch((error) => console.log("Race failed with:", error));

// Using Promise.any
Promise.any([promise2, promise1, promise3])
  .then((value) => console.log("Any fulfilled:", value))
  .catch((error) => console.log("All rejected:", error));
