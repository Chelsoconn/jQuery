async function fetchUserProfile(userId) {
  try {
    const userProfile = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    ).then((res) => res.json());
    console.log("User Profile", userProfile);
  } catch (error) {
    console.error("Error fetching profile:", error);
  }

  try {
    const userPosts = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    ).then((res) => res.json());
    console.log("User Posts", userPosts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  try {
    const userTodos = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/todos`
    ).then(res => res.json());

    console.log("User Todos", userTodos);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

fetchUserProfile().then(() => console.log('hi'))