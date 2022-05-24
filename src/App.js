import { useGithubUser } from "./useGithubUser";

export function App() {
  return <GithubUser username="AntonioTcs" />;
}

function GithubUser({ username }) {
  const { user } = useGithubUser(username);

  return (
    <div>
      {!user && <h1>Loading...</h1>}
      {user && <h1>User: {user.name}</h1>}
    </div>
  );
}
