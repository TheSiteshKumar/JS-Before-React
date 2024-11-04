const API_URL = "https://api.github.com/users/thesiteshkumar";

// Define async function to handle the API call
async function handlePromise() {
  try {
    // Fetch data from GitHub API
    const data = await fetch(API_URL);

    // Parse JSON response
    const jsonValue = await data.json();

    // Log the parsed JSON data
    console.log("GitHub User Data:", jsonValue);

    // You can also destructure specific properties you need
    const { login, name, public_repos, followers, following, created_at } =
      jsonValue;

    console.log(`
            Username: ${login}
            Name: ${name}
            Public Repositories: ${public_repos}
            Followers: ${followers}
            Following: ${following}
            Account Created: ${new Date(created_at).toLocaleDateString()}
        `);
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
  }
}

// Call the function
handlePromise();
