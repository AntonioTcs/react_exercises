import { useGithubUser } from "./useGithubUser";

export function App() {
  return <GithubUser username="AntonioTcs" />;
}

function GithubUser({ username }) {
  let { user, functionFetch } = useGithubUser(username);

  return <div>{<h1>{user}</h1>}</div>;
}
