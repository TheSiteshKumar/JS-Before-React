const API_URL = "https://api.github.com/users/thesiteshkumar";

async function handlePromise() {
  try {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log("User Data:", jsonValue);
  } catch (error) {
    console.error("Error:", error);
  }
}

handlePromise();
