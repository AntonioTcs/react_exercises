export function useGithubUser(username) {
  async function fetchFunc() {
    let response = await fetch(`https://api.github.com/users/${username}`);
    let data = response.json();
    return data;
  }

  const result = fetchFunc();
  return { result: result, functionFetch: fetchFunc };
}
